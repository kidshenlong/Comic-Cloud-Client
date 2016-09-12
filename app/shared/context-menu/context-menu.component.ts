/**
 * Created by Michael on 03/09/2016.
 */
/**
 * Inspired By https://github.com/isaacplmann/angular2-contextmenu
 */
import {Component, HostListener, OnInit} from "@angular/core";
import {ContextMenuService, IContextMenuClickEvent} from "./context-menu.service";


@Component({
    selector: 'context-menu',
    //host: { 'class' : "shelf2" },
    templateUrl: "/app/shared/context-menu/context-menu.component.html",
    styleUrls: ['app/shared/context-menu/context-menu.component.css'],
    providers: [],
    directives: []
})

export class ContextMenuComponent {

    //@Output() public close: EventEmitter<any> = new EventEmitter<any>();

    public isVisible:boolean = false;
    public items:string[] = [];

    private mouseLocation:{ left:number, top:number } = {left: 0, top: 0};

    constructor(private _contextMenuService:ContextMenuService) {
        _contextMenuService.show.subscribe((e:IContextMenuClickEvent) => {
            console.log("sub!!!");
            console.log(e);
            //this.items = e
            this.showMenu(e);
        });
    }

    @HostListener('document:click')
    public clickedOutside():void {
        //if (!this.isOpening) {
        this.hideMenu();
        //}
    }


    get contextMenuLocationStyles() {
        return {
            'position': 'fixed',
            'display': this.isVisible ? 'block' : 'none',
            left: this.mouseLocation.left + 'px',
            top: this.mouseLocation.top + 'px',
        };
    }

    public showMenu(e:IContextMenuClickEvent) {

        this.disableScroll();

        //if (e.actions && e.actions.length > 0) {
        this.isVisible = true;
        //}

        this.mouseLocation = {
            left: e.event.clientX,
            top: e.event.clientY,
        };

    }

    public hideMenu():void {
        /*if (this.isVisible === true) {
         this.close.emit({});
         }*/
        this.enableScroll();
        this.isVisible = false;
    }

    //Source: http://stackoverflow.com/a/4770179/1877109
    //keys = {37: 1, 38: 1, 39: 1, 40: 1};
    keys = [37, 38, 39, 40];

    private preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    private preventDefaultForScrollKeys(e) {
        console.log("keycode: " + e.keyCode);
        if (this.keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    }

    private disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onwheel = this.preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
        window.ontouchmove = this.preventDefault; // mobile
        document.onkeydown = this.preventDefaultForScrollKeys;
        document.documentElement.style.overflow = 'hidden';  // firefox, chrome
        document.body.scroll = "no"; // ie only
    }

    private enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
        document.documentElement.style.overflow = 'auto';  // firefox, chrome
        document.body.scroll = "yes"; // ie only
    }

    /* consider removing scroll bar*/

    /*private reloadScrollBars() {
        document.documentElement.style.overflow = 'auto';  // firefox, chrome
        document.body.scroll = "yes"; // ie only
    }

    private unloadScrollBars() {
        document.documentElement.style.overflow = 'hidden';  // firefox, chrome
        document.body.scroll = "no"; // ie only
    }*/
    /* consider disabling highlight when menu is open */

   /* body{
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }*/
}