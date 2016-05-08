System.register(["angular2/core", "angular2/platform/browser", './series-stack.component', "./series.service", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, series_stack_component_1, series_service_1, http_1;
    var LibraryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (series_stack_component_1_1) {
                series_stack_component_1 = series_stack_component_1_1;
            },
            function (series_service_1_1) {
                series_service_1 = series_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LibraryComponent = (function () {
                function LibraryComponent(_seriesService, title) {
                    this._seriesService = _seriesService;
                    title.setTitle("Comic Cloud - Library"); //http://stackoverflow.com/questions/34602806/how-to-change-page-title-in-angular2-router
                }
                LibraryComponent.prototype.ngOnInit = function () {
                    this.getSeries();
                };
                LibraryComponent.prototype.getSeries = function () {
                    var _this = this;
                    console.log("series call");
                    this._seriesService.getAllSeries().subscribe(function (series) { return _this.series = series; });
                    //error =>  this.errorMessage = <any>error);
                };
                LibraryComponent = __decorate([
                    core_1.Component({
                        selector: 'library',
                        host: {
                            'class': "shelf"
                        },
                        template: "\n        <series-stack *ngFor=\"#thisSeries of series\" [seriesObject]=\"thisSeries\"></series-stack>\n    ",
                        styles: [""],
                        providers: [browser_1.Title, http_1.HTTP_PROVIDERS, series_service_1.SeriesService],
                        directives: [series_stack_component_1.SeriesStackComponent]
                    }), 
                    __metadata('design:paramtypes', [series_service_1.SeriesService, browser_1.Title])
                ], LibraryComponent);
                return LibraryComponent;
            }());
            exports_1("LibraryComponent", LibraryComponent);
        }
    }
});
//# sourceMappingURL=library.component.js.map