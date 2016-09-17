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
var StackComponent = (function () {
    function StackComponent() {
        this.isStackImageLoaded = false;
    }
    StackComponent.prototype.stackImageLoaded = function (event) {
        this.isStackImageLoaded = true;
        console.log(event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], StackComponent.prototype, "stackData", void 0);
    __decorate([
        //todo this type should ideally be an abstract class that all stack types (ie comic, series, reading list) implement
        core_1.Input(), 
        __metadata('design:type', String)
    ], StackComponent.prototype, "stackType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StackComponent.prototype, "stackImage", void 0);
    StackComponent = __decorate([
        core_1.Component({
            selector: 'stack',
            templateUrl: '/app/shared/stack/stack.component.html',
            styleUrls: ['app/shared/stack/stack.component.css'],
            host: {
                'class': 'stack'
            },
        }), 
        __metadata('design:paramtypes', [])
    ], StackComponent);
    return StackComponent;
}());
exports.StackComponent = StackComponent;
//# sourceMappingURL=stack.component.js.map