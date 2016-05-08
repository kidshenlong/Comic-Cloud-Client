System.register(["angular2/core", "angular2/platform/browser"], function(exports_1, context_1) {
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
    var core_1, browser_1;
    var SeriesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            SeriesComponent = (function () {
                function SeriesComponent(title) {
                    //http://stackoverflow.com/questions/34602806/how-to-change-page-title-in-angular2-router
                    title.setTitle("Comic Cloud - Library");
                }
                SeriesComponent = __decorate([
                    core_1.Component({
                        selector: 'series',
                        template: "<div>test!!</div>",
                        providers: [browser_1.Title]
                    }), 
                    __metadata('design:paramtypes', [browser_1.Title])
                ], SeriesComponent);
                return SeriesComponent;
            }());
            exports_1("SeriesComponent", SeriesComponent);
        }
    }
});
//# sourceMappingURL=series.component.js.map