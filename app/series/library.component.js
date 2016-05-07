System.register(["../../node_modules/angular2/core.d", "../../node_modules/angular2/src/platform/browser/title.d", './series-stack.component.ts', "./series.service.ts", "../../node_modules/angular2/http.d"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_d_1, title_d_1, series_stack_component_ts_1, series_service_ts_1, http_d_1;
    var LibraryComponent;
    return {
        setters:[
            function (core_d_1_1) {
                core_d_1 = core_d_1_1;
            },
            function (title_d_1_1) {
                title_d_1 = title_d_1_1;
            },
            function (series_stack_component_ts_1_1) {
                series_stack_component_ts_1 = series_stack_component_ts_1_1;
            },
            function (series_service_ts_1_1) {
                series_service_ts_1 = series_service_ts_1_1;
            },
            function (http_d_1_1) {
                http_d_1 = http_d_1_1;
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
                    core_d_1.Component({
                        selector: 'library',
                        host: {
                            'class': "shelf"
                        },
                        template: "\n        <series-stack *ngFor=\"#thisSeries of series\" [seriesObject]=\"thisSeries\"></series-stack>\n    ",
                        styles: [""],
                        providers: [title_d_1.Title, http_d_1.HTTP_PROVIDERS, series_service_ts_1.SeriesService],
                        directives: [series_stack_component_ts_1.SeriesStackComponent]
                    }), 
                    __metadata('design:paramtypes', [series_service_ts_1.SeriesService, title_d_1.Title])
                ], LibraryComponent);
                return LibraryComponent;
            })();
            exports_1("LibraryComponent", LibraryComponent);
        }
    }
});
//# sourceMappingURL=library.component.js.map