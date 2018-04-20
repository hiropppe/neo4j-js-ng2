import { Component, ElementRef, OnChanges, OnInit, AfterViewInit }     from '@angular/core';
import { Input, Output, EventEmitter }          from '@angular/core';
import { ViewChildren, QueryList, ContentChildren } from '@angular/core';
import { SimpleChanges }                        from '@angular/core';
import { SettingsService }                      from '../../service';
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
    @Output('onLinkExpanded') onLinkExpanded: EventEmitter<Node> = new EventEmitter()

    links = [];
    selectedLinks = [];
    settings = {};

    loading: boolean = false;
    cancelable: boolean = false;

    constructor(private settingsService: SettingsService, private repo: Neo4jRepository)
    {

    }

    ngOnInit() {
        this.settings = {
            text: "Select Relationships",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "custom-class-example"
        };
    }

    ngOnChanges(changes: SimpleChanges)
    {
        this.links = []
        this.selectedLinks = []
        if (null !== changes.node.currentValue) {
            // always copy node properties to properties for the view whenever its not null
            // also update all labels (available and node labels)
            changes.node.currentValue.links.forEach((link: any) => {
                this.links.push({'id': link['ID'], 'itemName': link['TYPE']})
            })
            changes.node.currentValue.dispLinks.forEach((link: any) => {
                this.selectedLinks.push({'id': link['ID'], 'itemName': link['TYPE']})
            })
        }
    }

    onItemSelect(link: any) {

    }

    OnItemDeSelect(link: any) {

    }

    onSelectAll(items: any) {

    }

    onDeSelectAll(items: any) {

    }

    addItem(link: any) {
        this.links.push(link)
    }

    expand(e?: any)
    {
        if (e) { e.preventDefault() }

        this.node.dispLinks = []
        this.selectedLinks.forEach((link: any) => {
            this.node.dispLinks.push({'ID': link['id'], 'TYPE': link['itemName']})
        })
        this.onLinkExpanded.emit(this.node)
    }

    cancel(e?: any)
    {
        if (e) { e.preventDefault() }

        this.cancelable = false;
    }

    private gracefulId(node: NodeInterface)
    {
        return (node !== null && typeof(node) !== 'undefined' && node.getId() != null) ? node.getId() : null;
    }
}
