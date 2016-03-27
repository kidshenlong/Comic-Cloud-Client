import {Component, Input} from 'angular2/core';

@Component({
    selector: 'comic-stack',
    template: `
        <div class="comic-stack">Bingo!</div>
    `,
    styles: [`
        .comic-stack{
            width: 24%;
            border: 1px solid;
        }
    `]
})
export class ComicStackComponent {
}
