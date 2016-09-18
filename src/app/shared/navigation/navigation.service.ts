import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import {Navigation} from "./navigation.enum";

@Injectable()
export class NavigationService {
    private navigationModeSource = new Subject<string>();

    navigationMode$ = this.navigationModeSource.asObservable();

    changeMode(mode: Navigation){

        //this.mode = <NavigationType>NavigationType[newMode];


        this.navigationModeSource.next(Navigation[mode]);
        //console.log("change mode called");
        //console.log(this.navigationModeSource);
    }

    /*mode: string;

    changeMode(mode: string){
        this.mode = mode;
    }*/
}
