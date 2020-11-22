import {
    AfterViewInit,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {
    @ViewChild('drawer', {static: true})
    public drawer: MatDrawer;

    @ViewChild('container', {read: ViewContainerRef})
    public container: ViewContainerRef;

    @ContentChild('element', {read: TemplateRef})
    public hElement: TemplateRef<any>;

    @Output() public setSideNavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

    constructor() {
    }

    ngOnInit(): void {
        // console.log(this.container);

    }

    ngAfterViewInit(): void {
        this.container.createEmbeddedView(this.hElement);
        this.setSideNavControl.emit(this.drawer);
    }

}
