import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SharedModule} from '../../../shared/shared.module';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  animations: [
    trigger('slideInRight', [
      state('in', style({
        left: 0,
        opacity: 1,
      })),
      state('out', style({
        left: '100px',
        opacity: 0,
      })),
      transition('out => in', [
        animate('.4s ease-out'),
      ]),
    ]),
    trigger('slideInLeft', [
      state('in', style({
        right: 0,
        opacity: 1,
      })),
      state('out', style({
        right: '100px',
        opacity: 0,
      })),
      transition('out => in', [
        animate('.4s ease-out'),
      ]),
    ]),
  ]
})
export class IntroductionComponent {
  protected slideIn = 'out';
  protected onAppear() {
    this.slideIn = 'in';
  }
}
