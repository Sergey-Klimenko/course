import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public courseTitle = 'Angular Course';
    public drawer: MatDrawer;

    constructor(
        private changeDetector: ChangeDetectorRef
    ) {
    }

    public onSideNavToggle(event: any): void {
    }

    public setSideNav(drawer: MatDrawer): void {
        // Promise.resolve().then(() => {
        this.drawer = drawer;
        // });
        // this.changeDetector.detectChanges();
    }
}
