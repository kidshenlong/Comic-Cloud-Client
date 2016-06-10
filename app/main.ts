import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";
import {NavigationService} from "./shared/navigation/navigation.service";
//import {enableProdMode} from "@angular/core";

//enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, NavigationService]);