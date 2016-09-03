/**
 * Created by Michael on 03/09/2016.
 */
/**
 * Inspired By https://github.com/isaacplmann/angular2-contextmenu
 */
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';

export interface IContextMenuClickEvent {
    event: MouseEvent;
    actions: any[];
    item: any;
}

@Injectable()
export class ContextMenuService {
    public show: Subject<IContextMenuClickEvent> = new Subject<IContextMenuClickEvent>();
}