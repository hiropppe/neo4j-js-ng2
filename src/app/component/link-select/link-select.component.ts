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

    links = [];
    selectedLinks = [];
    settings = {};

    loading: boolean = false;
    cancelable: boolean = false;

    constructor(private wikidataService:  WikidataService)
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
        let node = changes.node.currentValue

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

    addItem(link: NodeInterface, target: NodeInterface) {
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

        if (targetLabel !== null) {
            let propTitle = this.wikidataService.getPropTitle(link.TYPE)
            if (null !== propTitle) {
                this.links.push({'id': link.ID, 'itemName': propTitle + ' -> ' + targetLabel})
            } else {
                this.links.push({'id': link.ID, 'itemName': link.TYPE + ' -> ' + targetLabel})
            }

            if (this.node.dispLinks.indexOf(link.ID) !== -1) {
                if (null !== propTitle) {
                    this.selectedLinks.push({'id': link.ID, 'itemName': propTitle + ' -> ' + targetLabel})
                } else {
                    this.selectedLinks.push({'id': link.ID, 'itemName': link.TYPE + ' -> ' + targetLabel})
                }
            }
        }
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

        this.cancelable = false;
    }

    private gracefulId(node: NodeInterface)
    {
        return (node !== null && typeof(node) !== 'undefined' && node.getId() != null) ? node.getId() : null;
    }
}
