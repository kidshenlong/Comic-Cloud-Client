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
var core_1 = require("@angular/core");
var navigation_service_1 = require("./navigation.service");
var navigation_type_1 = require("./navigation.type");
var authentication_service_1 = require("../authentication/authentication.service");
var router_1 = require("@angular/router");
var NavigationComponent = (function () {
    function NavigationComponent(navigationService, authenticationService, router) {
        var _this = this;
        this.navigationService = navigationService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.navigationType = navigation_type_1.NavigationType;
        navigationService.navigationMode$.subscribe(function (newMode) {
            //Type assertions: ttps://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#416-type-assertions
            //http://stackoverflow.com/questions/17380845/how-to-convert-string-to-enum-in-typescript
            _this.mode = navigation_type_1.NavigationType[newMode];
        });
    }
    NavigationComponent.prototype.logout = function () {
        var _this = this;
        this.authenticationService.logout().subscribe(function (response) { return _this.router.navigate(['/login']); }, function (error) { return alert(error); });
        return false;
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation',
            templateUrl: "/app/shared/navigation/navigation.component.html",
            styleUrls: ["app/shared/navigation/navigation.component.css"],
        }), 
        __metadata('design:paramtypes', [navigation_service_1.NavigationService, authentication_service_1.AuthenticationService, router_1.Router])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map