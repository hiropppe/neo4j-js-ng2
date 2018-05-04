import { Component, ElementRef, OnChanges, OnInit, AfterViewInit }     from '@angular/core';
import { Input, Output, EventEmitter }          from '@angular/core';
import { ViewChildren, QueryList, ContentChildren } from '@angular/core';
import { SimpleChanges }                        from '@angular/core';
import { SettingsService }                      from '../../service';
import { WikidataService }                      from '../../service';
import { Neo4jRepository }                      from '../../neo4j';
import { ResultSet, CypherQuery, Transaction }  from '../../neo4j/orm';
import { Node, NodeInterface, LinkInterface }                  from '../../neo4j/model';
import { diff }                                 from '../../core/array';

@Component({
    selector: 'link-select',
    templateUrl: './link-select.component.html',
    styleUrls: ['./link-select.component.scss']
})
export class LinkSelectComponent implements OnInit
{
    @Input('node') node: NodeInterface = null;
    @Output('onNodeChanged') onNodeChanged: EventEmitter<Node> = new EventEmitter()
    @Output('onLinkExpanded') onLinkExpanded: EventEmitter<Node> = new EventEmitter()
    @Output('onNodeHid') onNodeHid: EventEmitter<Node> = new EventEmitter()
    @Output('onDismiss') onDismiss: EventEmitter<any> = new EventEmitter();

    links = [];
    selectedLinks = [];
    settings = {};

    private properties: Array<[string, any]> = [];

    constructor(private wikidataService:  WikidataService)
    {

    }

    ngOnInit() {
        this.settings = {
            text: "Select Relationships",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "custom-class-example",
            enableSearchFilter: true
        };
    }

    ngOnChanges(changes: SimpleChanges)
    {
        let node = changes.node.currentValue

        if (null !== node) {
            // always copy node properties to properties for the view whenever its not null
            // also update all labels (available and node labels)
            this.properties = this.node.propertiesAsArray()

        } else {
            this.properties = [];
        }

        this.links = []
        this.selectedLinks = []

        this.onNodeChanged.emit(node)
    }

    onItemSelect(link: any) {

    }

    OnItemDeSelect(link: any) {

    }

    onSelectAll(items: any) {

    }

    onDeSelectAll(items: any) {

    }

    addLink(link: NodeInterface, target: NodeInterface, direction: number) {
        let targetLabel = null
        if (target.props['label']) {
            targetLabel = target.props['label']
        } else if (target.props['name']) {
            targetLabel = target.props['name']
        } else if (target.props['value']) {
            targetLabel = target.props['value']
        } else {
            // more relations
        }

        let arrow = null
        if (direction === 1) {
            arrow = ' -> '
        } else {
            arrow = ' <- '
        }

        if (targetLabel !== null) {
            let propTitle = this.wikidataService.getPropTitle(link.TYPE)
            if (null !== propTitle) {
                this.links.push({'id': link.ID, 'itemName': propTitle + arrow + targetLabel})
            } else {
                this.links.push({'id': link.ID, 'itemName': link.TYPE + arrow + targetLabel})
            }

            if (this.node.dispLinks.indexOf(link.ID) !== -1) {
                if (null !== propTitle) {
                    this.selectedLinks.push({'id': link.ID, 'itemName': propTitle + arrow + targetLabel})
                } else {
                    this.selectedLinks.push({'id': link.ID, 'itemName': link.TYPE + arrow + targetLabel})
                }
            }
        }
    }

    dismiss(e: any)
    {
        if (e) { e.preventDefault() }

        this.onDismiss.emit()
    }

    expand(e?: any)
    {
        if (e) { e.preventDefault() }

        this.node.dispLinks = []
        this.selectedLinks.forEach((link: any) => {
            this.node.dispLinks.push(link['id'])
        })
        this.onLinkExpanded.emit(this.node)
    }

    hide(e?: any)
    {
        if (e) { e.preventDefault() }

        this.onNodeHid.emit(this.node)
    }

    cancel(e?: any)
    {
        if (e) { e.preventDefault() }

        this.onDismiss.emit()
    }

    private gracefulId(node: NodeInterface)
    {
        return (node !== null && typeof(node) !== 'undefined' && node.getId() != null) ? node.getId() : null;
    }
}
