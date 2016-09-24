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
var core_1 = require("@angular/core");
var comic_state_service_1 = require("../comic-state/comic-state.service");
var ComicNavigationComponent = (function () {
    function ComicNavigationComponent(elementRef, comicStateService) {
        var _this = this;
        this.elementRef = elementRef;
        this.comicStateService = comicStateService;
        this.hidden = true;
        //comicStateService: ComicStateService;
        this._pageCount = 0;
        this._currentPage = 0;
        //this._currentPage = currentPage
        //this.comicStateService = comicStateService;
        this.comicStateService.currentPage$.subscribe(function (cp) { return _this._currentPage = cp; });
        //this.pageCount =  this.comicStateService.pageCount
        this.comicStateService.pageCount$.subscribe(function (pc) { return _this._pageCount = pc; });
    }
    Object.defineProperty(ComicNavigationComponent.prototype, "currentPage", {
        get: function () {
            //console.log(`[comic-navigation.component]getting value for text "${this._currentPage}"`);
            return this._currentPage;
        },
        set: function (value) {
            this.comicStateService.setCurrentPage(value);
            this._currentPage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComicNavigationComponent.prototype, "pageCount", {
        get: function () {
            return this._pageCount;
        },
        enumerable: true,
        configurable: true
    });
    ComicNavigationComponent.prototype.onMouseEnter = function () {
        var _this = this;
        //var t = this.elementRef.nativeElement.children;
        //console.log(t);
        //this.menuIsVisible = true; //todo (mpm) 11/06/2016 access should probably be through a method
        this.hidden = false; //todo (mpm) 11/06/2016 access should probably be through a method
        //this.elementRef.nativeElement.firstChild.firstChild.focus();
        //Added setTimeout in line with issuesd seen here http://stackoverflow.com/questions/1096436/document-getelementbyidid-focus-is-not-working-for-firefox-or-chrome
        //todo (mpm) 11/06/2016 revisit as keyboard may already be able to change page.
        setTimeout(function () { return _this.elementRef.nativeElement.children[0].children[0].focus(); }, 0);
    };
    ComicNavigationComponent.prototype.onMouseLeave = function () {
        //this.menuIsVisible = false;
        this.hidden = true;
    };
    ComicNavigationComponent = __decorate([
        core_1.Component({
            selector: 'comic-navigation',
            templateUrl: '/app/comic/comic-navigation/comic-navigation.component.html',
            styleUrls: ['app/comic/comic-navigation/comic-navigation.component.css'],
            providers: [],
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, comic_state_service_1.ComicStateService])
    ], ComicNavigationComponent);
    return ComicNavigationComponent;
}());
exports.ComicNavigationComponent = ComicNavigationComponent;
//# sourceMappingURL=comic-navigation.component.js.map