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
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var ComicStateService = (function () {
    function ComicStateService() {
        this.currentPageSource = new Subject_1.Subject();
        this.comicStatusSource = new Subject_1.Subject();
        this.pageCountSource = new Subject_1.Subject();
        this.currentPage$ = this.currentPageSource.asObservable();
        this.comicStatus$ = this.comicStatusSource.asObservable();
        this.pageCount$ = this.pageCountSource.asObservable();
    }
    /*setCurrentComic(currentComic: Comic){
        this.currentComic = currentComic;
    }*/
    ComicStateService.prototype.setPageCount = function (max) {
        this.pageCountSource.next(max);
    };
    ComicStateService.prototype.setCurrentPage = function (page) {
        //console.log("setting page to " + page);
        this.currentPageSource.next(page);
    };
    ComicStateService.prototype.setComicStatus = function (status) {
        //console.log("New Status: " + status);
        this.comicStatusSource.next(status);
    };
    ComicStateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ComicStateService);
    return ComicStateService;
}());
exports.ComicStateService = ComicStateService;
//# sourceMappingURL=comic-state.service.js.map