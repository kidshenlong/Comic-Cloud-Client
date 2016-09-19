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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ComicImageService = (function () {
    function ComicImageService(http) {
        this.http = http;
    }
    ComicImageService.prototype.getComicImage = function (url) {
        //return this.http.get(IMAGES_URL + "/" + uuid)
        //var thing;
        /*return this.http.get("http://static5.comicvine.com/uploads/scale_small/" +
            "6/66303/2734164-legendluther01_cover.jpeg")
            .map(res => <Response> res.blob())
            .catch(this.handleError);*/
        /*return this.loadImage("http://static5.comicvine.com/uploads/scale_small/" +
            "6/66303/2734164-legendluther01_cover.jpeg");*/
        return this.loadImage(url);
    };
    ComicImageService.prototype.loadImage = function (image) {
        //Observable.fromEvent
        return Observable_1.Observable
            .create(function (observer) {
            var img = new Image();
            img.src = image;
            img.onload = function () {
                observer.next(img);
                observer.complete();
            };
            img.onerror = function (err) {
                observer.error(err);
                observer.complete();
            };
        });
    };
    ComicImageService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ComicImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ComicImageService);
    return ComicImageService;
}());
exports.ComicImageService = ComicImageService;
//# sourceMappingURL=comic-image.service.js.map