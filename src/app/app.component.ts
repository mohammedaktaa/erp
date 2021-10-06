import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {routeTransitionAnimations} from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'erp';

  prepareRoute(outlet: RouterOutlet): string {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animationState;
  }
}
