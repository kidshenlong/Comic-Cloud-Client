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
var comic_image_service_1 = require("./comic-image.service");
var ComicImageComponent = (function () {
    //elementRef: ElementRef;
    //private comicImageService: ComicImageService;
    function ComicImageComponent(comicImageService, element, renderer) {
        this.comicImageService = comicImageService;
        this.element = element;
        this.hidden = true;
        this.enabled = false;
    }
    ComicImageComponent.prototype.enable = function () {
        this.enabled = true;
    };
    ComicImageComponent.prototype.loaded = function (event) {
        console.log(event);
        console.log("loaded");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ComicImageComponent.prototype, "srcToLoad", void 0);
    ComicImageComponent = __decorate([
        core_1.Component({
            selector: 'comic-image',
            templateUrl: "/app/comic/comic-image/comic-image.component.html",
            styleUrls: ['app/comic/comic-image/comic-image.component.css'],
            providers: [comic_image_service_1.ComicImageService]
        }), 
        __metadata('design:paramtypes', [comic_image_service_1.ComicImageService, core_1.ElementRef, core_1.Renderer])
    ], ComicImageComponent);
    return ComicImageComponent;
}());
exports.ComicImageComponent = ComicImageComponent;
//# sourceMappingURL=comic-image.component.js.map