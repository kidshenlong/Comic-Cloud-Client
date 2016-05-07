System.register(['../../node_modules/angular2/core.d', '../../node_modules/angular2/http.d', '../../node_modules/rxjs/Observable.d'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_d_1, http_d_1, Observable_d_1;
    var SeriesService;
    return {
        setters:[
            function (core_d_1_1) {
                core_d_1 = core_d_1_1;
            },
            function (http_d_1_1) {
                http_d_1 = http_d_1_1;
            },
            function (Observable_d_1_1) {
                Observable_d_1 = Observable_d_1_1;
            }],
        execute: function() {
            SeriesService = (function () {
                function SeriesService(http) {
                    this.http = http;
                    this._seriesUrl = 'http://localhost:3004/series'; // URL to web api
                }
                SeriesService.prototype.getAllSeries = function () {
                    return this.http.get(this._seriesUrl)
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); }) // eyeball results in the console
                        .catch(this.handleError);
                };
                SeriesService.prototype.getSeries = function (id) {
                    return this.http.get(this._seriesUrl + "/" + id)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); }) // eyeball results in the console
                        .catch(this.handleError);
                };
                SeriesService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_d_1.Observable.throw(error.json().error || 'Server error');
                };
                SeriesService = __decorate([
                    core_d_1.Injectable(), 
                    __metadata('design:paramtypes', [http_d_1.Http])
                ], SeriesService);
                return SeriesService;
            })();
            exports_1("SeriesService", SeriesService);
        }
    }
});
//# sourceMappingURL=series.service.js.map