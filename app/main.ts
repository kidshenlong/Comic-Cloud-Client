import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router';
import 'rxjs/Rx';
import {NavigationService} from "./shared/navigation/navigation.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, NavigationService]);