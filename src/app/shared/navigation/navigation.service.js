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
var navigation_type_1 = require("./navigation.type");
var NavigationService = (function () {
    function NavigationService() {
        this.navigationModeSource = new Subject_1.Subject();
        this.navigationMode$ = this.navigationModeSource.asObservable();
    }
    NavigationService.prototype.changeMode = function (mode) {
        //this.mode = <NavigationType>NavigationType[newMode];
        this.navigationModeSource.next(navigation_type_1.NavigationType[mode]);
        //console.log("change mode called");
        //console.log(this.navigationModeSource);
    };
    NavigationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=navigation.service.js.map