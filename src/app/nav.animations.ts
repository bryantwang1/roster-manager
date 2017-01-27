import {trigger, state, animate, style, transition} from '@angular/core';

export function navTransition() {
  return animateNav();
}

function animateNav() {
  return trigger('navPanel', [
    state('home', style({
        backgroundColor: '#0073e6'
    })),
    state('about', style({
        backgroundColor: 'maroon',
        color: 'white'
    })),
    state('admin', style({
        backgroundColor: 'gray'
    })),
  //   transition('home <=> about, about <=> admin, home <=> admin', animate('300ms ease-in'))
  ]);
}
