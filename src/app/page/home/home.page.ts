import { Component, ViewChild }     from '@angular/core';
import { OnInit, AfterViewInit }    from '@angular/core';
import { GraphComponent, LinkSelectComponent }           from '../../component';
import { SettingsService }          from '../../service';
import { Neo4jRepository }          from '../../neo4j';
import { ResultSet, Transaction }   from '../../neo4j/orm';
import { Node, NodeInterface  }     from '../../neo4j/model';
import { Link, LinkInterface  }     from '../../neo4j/model';
import { LabelInterface }           from '../../neo4j/model';
import { unique, crosscut }         from '../../core/array';
import { LinkUpdatedEvent }         from '../../component/link-edit/link-edit.component';

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    host: { '(window:keydown)': 'onHotkeyPressed($event)' },
})
export class HomePageComponent implements OnInit, AfterViewInit
{
    selectedNode: Node = null;
    selectedLink: Node = null;
    expandLinks: boolean = false;

    createModeEnabled: boolean = false
    createModeDefaults: any = {
        label: 'Test',
        relationshipType: 'MY_REL'
    }
    @ViewChild(GraphComponent) graph: GraphComponent;
    @ViewChild(LinkSelectComponent) linkSelect: LinkSelectComponent;

    saveErrorText: string = null;
    saveSuccessText: string = null;
    searchLoading: boolean = false;
    explorerToggled: boolean = false;

    labels: Array<any> = [];

    // @todo General: sue a setting to discint nodes by propertu (ID) or none, and use distinct INSIDE graph.componenet
    constructor(private repo: Neo4jRepository, private settings: SettingsService)
    {

    }

    ngOnInit()
    {
        this.repo.findAllLabels().then((labels: Array<LabelInterface>) => {
            this.labels = labels;
        }).catch(err => {
            this.toastError(err)
        })
    }

    ngAfterViewInit()
    {
        this.graph.start()
    }

    ngOnChanges()
    {

    }

    onHotkeyPressed(e: any)
    {
        // handle IE, and then Netscape/Firefox/Opera
        const keynum = (window.event) ? e.keyCode : e.which

        const letter = String.fromCharCode(keynum);
        const ctrlKey = (true === e.ctrlKey) ? 'ctrl' : false
        const inputCombination = [letter, ctrlKey]

        const createModeCombination = this.settings.get('hotkeys.toggleCreateMode')

        if (crosscut(inputCombination, createModeCombination)) {
            this.onCreateModeChanged(!this.createModeEnabled)
        }
    }

    exploreToggle(e: any)
    {
        e.preventDefault()
        this.explorerToggled = !this.explorerToggled;
    }

    filterByLabel(e: LabelInterface)
    {
        let label = e;
        this.graph.clear();
        this.onSearch({ mode: 'normal', queryString: `MATCH (a:${label.name}) RETURN a, LABELS(a), ID(a)` })
    }

    onSearch(e: any)
    {
        this.searchLoading = true;

        // const mode = e.mode;
        // const queryString = e.queryString;
        this.repo.execute(e.queryString).then((resultSets: Array<ResultSet>) => {

            this.searchLoading = false;

            let links = [];
            let dataset1 = resultSets[0].getDataset('a')

            this.graph.addNodes(dataset1)

            this.graph.update()

        }).catch(err => {
            console.log(err)
            this.searchLoading = false;
            this.toastError(err)
        })
    }

    onNodeCreated(node: NodeInterface)
    {
        // a new node object is createee but not yet appended to the graph
        // and not saved remotely. This is because we are using real neo4j IDs
        // to handle proper UI and be safe regarding integrity so you'll
        // need to make the cypher transaction and append node to graph only
        // if it was successfull
        const savedNode = node;

        // @todo Set default label from create mode windows
        node.addLabel(this.createModeDefaults.label)

        this.repo.persistNode(node).then((node: NodeInterface) => {
            node.setFixed(true).setCoords(savedNode.getCoords())
            this.graph.addNode(node)
        })
    }

    onNodeSelected(node: NodeInterface)
    {
//        this.findRelationships(node)
        this.selectedLink = null
        this.selectedNode = node
        this.expandLinks = true
    }

    onLinkSelected(g: any)
    {
        this.selectedNode = null;
        this.expandLinks = false
        if (null !== g) {
            this.selectedLink = g.relationship;
        }
    }

    onNodeDoubleClicked(node: NodeInterface)
    {
        this.selectedLink = null
        this.selectedNode = node
        this.expandLinks = false
    }

    onNodeAdded(node: NodeInterface)
    {
        // very unlikely you will use this event but who knows...
        // this is triggered when a node is added to the graph (not created per say)
    }

    onNodeEdited(node: NodeInterface)
    {
        if (null === node) {
            //then an error occured
            this.saveSuccessText = null;
            this.saveErrorText = 'An error occured';
        } else {
            this.saveSuccessText = null;
            if (node.deleted == true) {
                this.graph.removeNode(node)
                this.saveSuccessText = 'Node deleted';
                this.selectedNode = null;
            } else {
                this.graph.updateNode(node)
                this.saveSuccessText = 'Node saved';
            }
        }
    }

    onNodeChanged(node: NodeInterface)
    {
        node.loading = true
        node.links = []
        this.repo.execute(`MATCH (a)-[r]->(b) WHERE ID(a) = ${node.ID} RETURN r, ID(r), TYPE(r), b, ID(b), LABELS(b)`).then((resultSet: Array<ResultSet>) => {
            let links = resultSet[0].getDataset('r')
            let targets = resultSet[0].getDataset('b')
            for (let i=0; i<links.length; i++) {
                node.links.push(links[i])
                node.targets.push(targets[i])
                this.linkSelect.addItem(links[i], targets[i])
            }
            node.loading = false
        })
    }

    onLinkExpanded(node: NodeInterface)
    {
        for(let i=0; i<node.links.length; i++) {
            if (node.dispLinks.indexOf(node.links[i].ID) === -1) {
                this.graph.removeLinkById(node.links[i].ID, false)
            } else {
                this.graph.addNode(node.targets[i], false)
                this.graph.addLink(new Link({source: node, target: node.targets[i], relationship:node.links[i]}), false)
            }
        }

        this.graph.update()
    }

    onNodeHid(node: NodeInterface)
    {
        this.graph.removeNode(node, true)
    }

    /**
     * @param e { link: NodeInterface, previousLink: NodeInterface }
     */
    onLinkEdited(e: LinkUpdatedEvent)
    {
        if (null === e.currentValue) {
            //then an error occured
            this.toastError('An error occured')
        } else {
            if (e.currentValue.deleted == true) {
                this.graph.removeLink(e.currentValue)
                this.toastSuccess('Relationship deleted')
                this.selectedLink = null
            } else {
                this.graph.updateLink(e.currentValue, e.previousValue)
                this.toastSuccess('Relationship saved')
            }
        }
    }

    onLinkCreated(e: any)
    {
        this.repo.createRelationship(e.source, e.target, '->', this.createModeDefaults.relationshipType).then((link: Link) => {

            this.graph.addLink(link)
            this.toastSuccess('Relationship saved')

        }).catch(err => {
            this.toastError(err)
        })
    }

    onCreateModeChanged(e: boolean)
    {
         // avoid expression (of createModeEnabled) before it was checked (just Angular2 classic view adjustement here)
        this.selectedNode = null;
        // then safely reset create mode variable
        this.createModeEnabled = e;
    }

    private findRelationships(sourceNode: NodeInterface)
    {
        // query relationships in both ways
        this.repo.findRelationships(sourceNode, '->').then((links: Array<LinkInterface>) => {

            links.forEach((link: LinkInterface, i) => {
                this.graph.addNode(link.target)
                this.graph.addLink(link)
            })

        }).catch(err => {
            this.toastError(err)
        })

        this.repo.findRelationships(sourceNode, '<-').then((links: Array<LinkInterface>) => {

            links.forEach((link: LinkInterface, i) => {
                this.graph.addNode(link.source)
                this.graph.addLink(link)
            })

        }).catch(err => {
            this.toastError(err)
        })
    }

    private toastError(msg: string)
    {
        this.saveSuccessText = null;
        this.saveErrorText = msg;
    }

    private toastSuccess(msg: string)
    {
        this.saveSuccessText = msg;
        this.saveErrorText = null;
    }
}
