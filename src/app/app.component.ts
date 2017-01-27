import { Component } from '@angular/core';
import { routerTransition } from './router.animations';
import { navTransition } from './nav.animations';
import { slideTransition } from './slide.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition(), navTransition(), slideTransition()],
  host: {'[@routerTransition]': ''}
})
export class AppComponent {
  state: string = 'home';

  navClick(page) {
    console.log('nav clicked');
    this.state = page;
  }
}
