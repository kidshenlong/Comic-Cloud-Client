//import {Component, Input} from '../../node_modules/angular2/core.d';
import {Component, Input} from "angular2/core";

@Component({
    selector: 'header-menu',
    template: `
        <div id="header-menu"></div>
    `,
    styles: [`
        #header-menu{
            width: 100%;
            position: fixed;
            top: 0;
            height: 50px;
            border-bottom: 1px solid #CCC;
            z-index: 90;
            background-color: white;
        }
    `]
})
export class HeaderMenuComponent {
}
