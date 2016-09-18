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
var platform_browser_1 = require("@angular/platform-browser");
var series_service_1 = require("../series/series.service");
var series_model_1 = require("../series/series.model");
var navigation_service_1 = require("../shared/navigation/navigation.service");
var navigation_type_1 = require("../shared/navigation/navigation.type");
var upload_service_1 = require("../shared/upload/upload.service");
var LibraryComponent = (function () {
    function LibraryComponent(_seriesService, title, navigationService, uploadService) {
        this._seriesService = _seriesService;
        this.uploadService = uploadService;
        this.isTransparent = false;
        title.setTitle("Comic Cloud - Library");
        navigationService.changeMode(navigation_type_1.NavigationType.Library);
        uploadService.uploader.onCompleteAll = function () {
            console.log('complete');
        };
    }
    /*public uploader:FileUploader = new FileUploader(
        {url: 'https://evening-anchorage-3159.herokuapp.com/api/', autoUpload: true}
    );
*/
    LibraryComponent.prototype.fileOver = function (e) {
        this.isTransparent = e;
    };
    LibraryComponent.prototype.ngOnInit = function () {
        this.series = this.getSeries();
    };
    LibraryComponent.prototype.getSeries = function () {
        console.log("series call");
        //this._seriesService.getAllSeries().subscribe(series => this.series = series);
        return [
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new series_model_1.Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
        ];
        //error =>  this.errorMessage = <any>error);
    };
    LibraryComponent = __decorate([
        core_1.Component({
            selector: 'library',
            host: { 'class': "shelf2" },
            templateUrl: "/app/library/library.component.html",
            styleUrls: ['app/library/library.component.css'],
            providers: [series_service_1.SeriesService, upload_service_1.UploadService],
        }), 
        __metadata('design:paramtypes', [series_service_1.SeriesService, platform_browser_1.Title, navigation_service_1.NavigationService, upload_service_1.UploadService])
    ], LibraryComponent);
    return LibraryComponent;
}());
exports.LibraryComponent = LibraryComponent;
//# sourceMappingURL=library.component.js.map