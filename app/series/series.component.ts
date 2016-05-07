import {Component} from "../../node_modules/angular2/core.d";
import {Title} from "../../node_modules/angular2/src/platform/browser/title.d";
import {Router} from "../../node_modules/angular2/router.d";

@Component({
    selector: 'series',
    template: "<div>test!!</div>",
    providers: [Title]
})
export class SeriesComponent{//} implements OnInit {
    constructor(title:Title) {
        //http://stackoverflow.com/questions/34602806/how-to-change-page-title-in-angular2-router
        title.setTitle("Comic Cloud - Library");
    }
}