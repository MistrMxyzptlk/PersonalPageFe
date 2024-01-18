import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';

const DEFAULT_DURATION = 600;
export const Collapse = trigger('collapse', [
  state('in', style({
    height: AUTO_STYLE,
    visibility: AUTO_STYLE,
    opacity: AUTO_STYLE
  })),
  state('out', style({
    height: '0px',
    visibility: 'hidden',
    opacity: 0,
  })),
  transition('in => out', [
    animate(DEFAULT_DURATION + 'ms ease-in')
  ]),
  transition('out => in', [
    animate(DEFAULT_DURATION + 'ms ease-out')
  ]),
])
