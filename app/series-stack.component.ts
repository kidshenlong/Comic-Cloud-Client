import {Component, Input} from 'angular2/core';
import {Series} from "./series";

@Component({
    selector: 'series-stack',
    template: `
        <div class="series-stack">{{seriesObject.title}}</div>
    `,
    styles: [`
        .series-stack{
            width: 100%;
            border: 1px solid;
        }
    `]
})
export class SeriesStackComponent {
    @Input()
    seriesObject: Series;
}
