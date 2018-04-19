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
    @Output('onNodeEdited') onNodeEdited: EventEmitter<Node> = new EventEmitter()

    links = [];
    selectedLinks = [];
    settings = {};

    loading: boolean = false;
    cancelable: boolean = false;

    constructor(private settingsService: SettingsService, private repo: Neo4jRepository)
    {

    }

    ngOnInit() {
        this.node.links.forEach((link: any, i) => {
            console.log(link[1])
            this.links.push({'id': link[0], 'itemName': link[1]})
        })
        /*
        this.links = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        */
        this.settings = {
            text: "Select Relationships",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "custom-class-example"
        };
    }

    onItemSelect(link: any) {
        console.log(link);
        console.log(this.links);
    }

    OnItemDeSelect(link: any) {
        console.log(link);
        console.log(this.selectedLinks);
    }

    onSelectAll(items: any) {
        console.log(items);
    }

    onDeSelectAll(items: any) {
        console.log(items);
    }

    expand(e?: any)
    {
        if (e) { e.preventDefault() }
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
