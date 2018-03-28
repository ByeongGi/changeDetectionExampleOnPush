import { Component, OnInit, ViewContainerRef, NgZone, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';
import { CheckEventService } from '../check-event.service';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class Cmp2Component implements OnInit , AfterViewChecked {

  ngOnInit() {
  }
  constructor(private ch: CheckEventService, private el: ViewContainerRef, private zone: NgZone) {}

  ngAfterViewChecked(): void {
    console.log('TEST');
    // this.msg = '변화감지!';
    this.ch.checkEvent(this.el, this.zone , '');
  }
}
