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
 * Created by Michael on 27/08/2016.
 */
var core_1 = require("@angular/core");
var navigation_service_1 = require("../shared/navigation/navigation.service");
var navigation_type_1 = require("../shared/navigation/navigation.type");
var platform_browser_1 = require("@angular/platform-browser");
var authentication_service_1 = require("../shared/authentication/authentication.service");
var RegisterComponent = (function () {
    function RegisterComponent(title, navigationService, authenticationService) {
        this.authenticationService = authenticationService;
        title.setTitle("Comic Cloud - Register");
        navigationService.changeMode(navigation_type_1.NavigationType.Disabled);
    }
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: "/app/register/register.component.html",
            styleUrls: ['app/register/register.component.css'],
            providers: [],
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, navigation_service_1.NavigationService, authentication_service_1.AuthenticationService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map