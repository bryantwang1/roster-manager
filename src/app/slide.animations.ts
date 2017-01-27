import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

export function slideTransition() {
  return movePanel();
}

function movePanel() {
  return trigger('movePanel', [

    transition('void => *', [
      animate(600, keyframes([
        style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
        style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))
    ])
  ]);
}
