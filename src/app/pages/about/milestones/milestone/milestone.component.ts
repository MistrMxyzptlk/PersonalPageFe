import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {IInterval} from '../../../../shared/model/interval.model';
import {SharedModule} from '../../../../shared/shared.module';
import {slideIn, SlideInAnimationsStateName} from '../../../../shared/animations/slide-in.animation';
import {zoomIn, ZoomInAnimationStateName} from '../../../../shared/animations/zoom-in.animation';
import {IAnimationState} from '../../../../shared/model/animation-state.model';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule, MatIconModule, SharedModule],
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
  animations: [
    slideIn(150, 100),
    zoomIn(0.5)
  ]
})
export class MilestoneComponent {
  @Input() public icon?: string;
  @Input() public svgIcon?: string;
  @Input() public headline = 'Chybí nadpis!';
  @Input() public date?: IInterval<Date> | Date;
  @Input() public set appeared(value: 'initial' | 'default') {
    if (value === 'default') {
      this.resetAnimations();
      return;
    }
    this.animationStates = this.animationStates.map(() => ({state: value}));
  }

  @ViewChild('scrollTarget', {static: false})
  private scrollTarget!: ElementRef;

  constructor(
    private elementRef: ElementRef
  ) {
  }

  protected animationStates: IAnimationState<SlideInAnimationsStateName | ZoomInAnimationStateName>[] = [
    {state: 'zoomOut'},
    {state: 'right'  },
  ];

  protected resetAnimations() {
    this.animationStates = [{state: 'zoomOut'}, {state: 'right'  }];
  }

  public scrollIntoView() {
    this.scrollTarget.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}
