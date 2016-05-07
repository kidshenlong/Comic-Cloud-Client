System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeaderMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderMenuComponent = (function () {
                function HeaderMenuComponent() {
                }
                HeaderMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'header-menu',
                        template: "\n        <div id=\"header-menu\"></div>\n    ",
                        styles: ["\n        #header-menu{\n            width: 100%;\n            position: fixed;\n            top: 0;\n            height: 50px;\n            border-bottom: 1px solid #CCC;\n            z-index: 90;\n            background-color: white;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderMenuComponent);
                return HeaderMenuComponent;
            })();
            exports_1("HeaderMenuComponent", HeaderMenuComponent);
        }
    }
});
//# sourceMappingURL=header-menu.component.js.map