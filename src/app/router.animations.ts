import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'relative', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('300ms ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({position: 'fixed', transform: 'translateX(0%)'}),
      animate('300ms ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}
