/**
 * Created by Michael on 27/08/2016.
 */
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
var router_1 = require('@angular/router');
var authentication_service_1 = require("./authentication.service");
var AuthenticationGuard = (function () {
    function AuthenticationGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.redirectToLibrary = ["login", "register"];
        this.redirectToLogin = ["series", "comic", "library"];
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        var attemptedPath = route.url[0].path;
        if (this.authenticationService.isLoggedIn()) {
            return this.redirectTo(attemptedPath, this.redirectToLibrary, '/library');
        }
        else {
            return this.redirectTo(attemptedPath, this.redirectToLogin, '/login');
        }
    };
    AuthenticationGuard.prototype.redirectTo = function (attempted_path, paths, redirect_path) {
        if (paths.indexOf(attempted_path) != -1) {
            this.router.navigate([redirect_path]);
            return false;
        }
        else {
            return true;
        }
    };
    AuthenticationGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());
exports.AuthenticationGuard = AuthenticationGuard;
//# sourceMappingURL=authentication-guard.service.js.map