import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import {NavigationType} from "./navigation.type";

@Injectable()
export class NavigationService {
    private navigationModeSource = new Subject<string>();

    navigationMode$ = this.navigationModeSource.asObservable();

    changeMode(mode: NavigationType){

        //this.mode = <NavigationType>NavigationType[newMode];


        this.navigationModeSource.next(NavigationType[mode]);
        //console.log("change mode called");
        //console.log(this.navigationModeSource);
    }

    /*mode: string;

    changeMode(mode: string){
        this.mode = mode;
    }*/
}
