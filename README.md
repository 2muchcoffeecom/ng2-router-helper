
Installation
--------------------------------------

Install it from npm:

```bash
npm install ng2-router-helper
```

Usage
--------------------------------------


### Including

Including RouterHelper Service

```html
import {RouterHelper} from "ng2-router-helper";

@Component({
  template: `{{ routerHelper.is('routerName') | async }}`
  providers:[RouterHelper]
})
export class TestComponent {
  constructor(
    private routerHelper: RouterHelper
  ) {}
    
  this.isPartOfRoute$ = this.routerHelper.is('routerName2')
  this.isPartOfRoute$.subscribe(res=>{
    console.log(res)
  })
}
```

- `is(routePath):Observable<boolean>` - Checking if the <routePath> is the last part of the current URL  
- `includes(routePath):Observable<boolean>` - Checking if the needed part of the URL matches the <routePath>

### See also

- [Getting current state in Angular 2 router](http://blog.2muchcoffee.com/getting-current-state-in-angular2-router)