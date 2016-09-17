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
var router_1 = require("@angular/router");
var comic_model_1 = require("./../comic/comic.model");
var series_service_1 = require("./series.service");
var series_model_1 = require("./series.model");
var navigation_service_1 = require("../shared/navigation/navigation.service");
var navigation_type_1 = require("../shared/navigation/navigation.type");
var SeriesComponent = (function () {
    function SeriesComponent(_seriesService, title, navigationService, route, router) {
        this._seriesService = _seriesService;
        this.route = route;
        this.router = router;
        this.title = title;
        navigationService.changeMode(navigation_type_1.NavigationType.Library);
    }
    SeriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.currentSeries = _this.getSeries(id);
            _this.title.setTitle("Comic Cloud - " + _this.currentSeries.title + " (" + _this.currentSeries.start_year + ")");
            _this.comics = _this.getComics(id);
        });
    };
    SeriesComponent.prototype.getComics = function (series_id) {
        console.log("series_id " + series_id);
        console.log("comic call");
        return [
            new comic_model_1.Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null, ["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new comic_model_1.Comic("905B5C64-1560-11E6-A89C-564E36676F52", 2, null, ["http://i.annihil.us/u/prod/marvel/i/mg/6/b0/537270c2cf77f/detail.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new comic_model_1.Comic("905B5C64-1560-11E6-A89C-564E36676F53", 3, null, ["http://x.annihil.us/u/prod/marvel/i/mg/4/60/539765882db8b/detail.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new comic_model_1.Comic("905B5C64-1560-11E6-A89C-564E36676F54", 4, null, ["http://i.annihil.us/u/prod/marvel/i/mg/5/03/53c424e569105/detail.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new comic_model_1.Comic("905B5C64-1560-11E6-A89C-564E36676F55", 5, null, ["http://i.annihil.us/u/prod/marvel/i/mg/6/c0/53dbe3834297d/detail.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete")
        ];
    };
    SeriesComponent.prototype.getSeries = function (series_id) {
        return new series_model_1.Series(series_id, "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg");
    };
    SeriesComponent = __decorate([
        core_1.Component({
            selector: 'library',
            host: { 'class': "shelf" },
            templateUrl: "/app/series/series.component.html",
            providers: [platform_browser_1.Title, series_service_1.SeriesService],
        }), 
        __metadata('design:paramtypes', [series_service_1.SeriesService, platform_browser_1.Title, navigation_service_1.NavigationService, router_1.ActivatedRoute, router_1.Router])
    ], SeriesComponent);
    return SeriesComponent;
}());
exports.SeriesComponent = SeriesComponent;
//# sourceMappingURL=series.component.js.map