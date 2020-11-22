import {
    AfterContentChecked,
    AfterContentInit, AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges,
    AfterViewInit, AfterContentInit,
    DoCheck, AfterContentChecked, AfterViewChecked {


    @Input()
    public set myTitle(value) {
        if (!value) {
            return;
        }
        console.log('[setter]', value);
        this.title = value;
    }

    @Input()
    public drawer: MatDrawer;

    public title: string;
    // @Output()
    // public toggle = new EventEmitter();

    constructor() {
        console.log('[constructor]');

    }

    ngOnInit(): void {
        console.log('[ngOnInit]');
    }

    public toggleSidenav(): void {
        // this.toggle.emit(mySpan);
        this.drawer.toggle();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('[ngOnChanges]', changes);
    }

    ngDoCheck(): void {
        console.log('[ngDoCheck]');
    }

    ngAfterContentInit(): void {
        console.log('[ngAfterContentInit]');
    }

    ngAfterViewInit(): void {
        console.log('[ngAfterViewInit]');
    }

    ngAfterContentChecked(): void {
        console.log('[ngAfterContentChecked]');
    }

    ngAfterViewChecked(): void {
        console.log('[ngAfterViewChecked]');
    }

}
