import {Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import "rxjs";

@Injectable()
export class RouterHelper {
  constructor(
    public activatedRoute: ActivatedRoute,
  ) {
  }
  
  includes(routePath = ''): Observable<boolean> {
    let urls: any = this.activatedRoute.pathFromRoot
    .map((el) => {
      return el.url;
    });
    
    return Observable.combineLatest(...urls)
    .map(res => {
      let filteredPaths = res.filter((el) => {
        if (!el[0] || !el[0].path) return false;
        return el[0].path == routePath
      });
      return !!filteredPaths.length;
    })
    .publishReplay(1).refCount();
  }
  
  is(routePath = ''): Observable<boolean> {
    return this.activatedRoute.url
    .map(el => {
      if (!el[0] || !el[0].path) return false;
      return el[0].path == routePath
    })
    .publishReplay(1).refCount();
  }
}