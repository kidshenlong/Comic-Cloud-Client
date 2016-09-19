"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Michael on 08/05/2016.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require("@angular/router");
var comic_model_1 = require("./comic.model");
var comic_service_1 = require("./comic.service");
var navigation_service_1 = require("../shared/navigation/navigation.service");
var navigation_type_1 = require("../shared/navigation/navigation.type");
var comic_image_component_1 = require("./comic-image/comic-image.component");
//import {ComicStateService} from "./comic-state/comic-state.service";
var core_2 = require('@angular/core');
var comic_state_service_1 = require("./comic-state/comic-state.service");
var comic_status_type_1 = require("./comic-status/comic-status.type");
var ComicComponent = (function () {
    function ComicComponent(comicService, title, elementRef, comicStateService, navigationService, route, router) {
        var _this = this;
        this.comicService = comicService;
        this.elementRef = elementRef;
        this.comicStateService = comicStateService;
        this.route = route;
        this.router = router;
        this.comicStatus = comic_status_type_1.ComicStatusType.Waiting;
        this._currentPage = 0;
        this.title = title;
        navigationService.changeMode(navigation_type_1.NavigationType.Reader);
        comicStateService.comicStatus$.subscribe(function (newStatus) { return _this.comicStatus = newStatus; });
        comicStateService.currentPage$.subscribe(function (page) {
            _this._currentPage = page;
            _this.viewPage(page);
        });
    }
    ComicComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //Delay to avoid one-time devMode unidirectional-data-flow-violation error
        setTimeout(function () {
            _this.elementRef.nativeElement.focus();
            //this.comicImageComponents.toArray();
            var from = 0;
            var to = 2; //todo (mpm) 10/06/2016 Add constraint for if 3 doesn't exist
            _this.loadImages(from, to);
            _this.viewPage(0);
            console.log(_this.comicImageComponents);
        }, 0);
    };
    ComicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title.setTitle("Comic Cloud - ");
            _this.comic = _this.getComic(id);
            _this.comicStateService.setPageCount(_this.comic.comic_book_archive_contents.length);
        });
    };
    ComicComponent.prototype.getComic = function (comic_id) {
        return new comic_model_1.Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null, [
            "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg",
            "http://static7.comicvine.com/uploads/scale_super/3/39001/3818661-amazingfantasy15.jpg",
            "https://s-media-cache-ak0.pinimg.com/236x/c6/2d/68/c62d689f3644b94165505215724d691d.jpg"
        ], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete");
    };
    ComicComponent.prototype.loadImages = function (from, to) {
        var componentsArray = this.comicImageComponents.toArray();
        this.comicStateService.setComicStatus(comic_status_type_1.ComicStatusType.Loading);
        for (var i = from; i <= to; i++) {
            componentsArray[i].enable();
        }
    };
    Object.defineProperty(ComicComponent.prototype, "currentPage", {
        get: function () {
            //console.log(`[comic.component]getting value for text "${this._currentPage}"`);
            return this._currentPage;
        },
        set: function (value) {
            //console.log("[New Page]" + value);
            //console.log("[Page Count]" + pageCount);
            var pageCount = this.comic.comic_book_archive_contents.length;
            if (value >= 0 || value < (pageCount - 1)) {
                this.comicStateService.setCurrentPage(value);
                this._currentPage = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ComicComponent.prototype.viewPage = function (page) {
        console.log("change page to: " + page);
        var pageCount = this.comic.comic_book_archive_contents.length;
        var componentsArray = this.comicImageComponents.toArray();
        console.log(componentsArray);
        //if((page - 1) < pageCount || page >= 0) {
        for (var _i = 0, componentsArray_1 = componentsArray; _i < componentsArray_1.length; _i++) {
            var component = componentsArray_1[_i];
            component.hidden = true;
        }
        componentsArray[page].hidden = false;
        //}
    };
    ComicComponent.prototype._keyup = function (event) {
        if (event.keyCode === 37) {
            console.log("left");
            this.currentPage--;
        }
        else if (event.keyCode === 39) {
            console.log("right");
            this.currentPage++;
        }
    };
    __decorate([
        core_2.ViewChildren(comic_image_component_1.ComicImageComponent), 
        __metadata('design:type', core_2.QueryList)
    ], ComicComponent.prototype, "comicImageComponents", void 0);
    ComicComponent = __decorate([
        core_1.Component({
            selector: 'comic',
            templateUrl: "/app/comic/comic.component.html",
            styleUrls: ['app/comic/comic.component.css'],
            //directives: [ComicNavigationComponent, ComicImageComponent],
            providers: [platform_browser_1.Title, comic_service_1.ComicService, comic_state_service_1.ComicStateService],
            host: {
                '(document:keyup)': '_keyup($event)'
            },
        }), 
        __metadata('design:paramtypes', [comic_service_1.ComicService, platform_browser_1.Title, core_2.ElementRef, comic_state_service_1.ComicStateService, navigation_service_1.NavigationService, router_1.ActivatedRoute, router_1.Router])
    ], ComicComponent);
    return ComicComponent;
}());
exports.ComicComponent = ComicComponent;
//# sourceMappingURL=comic.component.js.map