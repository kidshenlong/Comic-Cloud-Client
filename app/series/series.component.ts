import {Component} from "angular2/core";
import {Title} from "angular2/platform/browser";
import {Router} from "angular2/router";

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