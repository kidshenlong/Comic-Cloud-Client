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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var router_1 = require('@angular/router');
var AuthenticationService = (function () {
    function AuthenticationService(router) {
        this.router = router;
    }
    AuthenticationService.prototype.logout = function () {
        //localStorage.removeItem('loggedIn')
        return Observable_1.Observable.of(true).delay(1000).do(function (val) { return localStorage.removeItem('loggedIn'); });
    };
    AuthenticationService.prototype.login = function (username, password) {
        var body = JSON.stringify({ username: username, password: password });
        console.log(body);
        return Observable_1.Observable.of(true).delay(1000).do(function (val) { return localStorage.setItem('loggedIn', 'true'); });
        //return Observable.of(true).delay(1000).do(val => throw new Error("error!"));
        //return Observable.throw(new Error('error!'));
        //return Observable.throwError(new Error('error!'));
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return Boolean(localStorage.getItem('loggedIn')) || false;
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map