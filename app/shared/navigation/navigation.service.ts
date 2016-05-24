import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import {NavigationType} from "./navigation.type";

@Injectable()
export class NavigationService {
    private navigationModeSource = new Subject<string>();

    navigationMode$ = this.navigationModeSource.asObservable();

    changeMode(mode: NavigationType){
        this.navigationModeSource.next(mode as string);//todo revisit why this is an error
        //console.log("change mode called");
        //console.log(this.navigationModeSource);
    }

    /*mode: string;

    changeMode(mode: string){
        this.mode = mode;
    }*/
}
