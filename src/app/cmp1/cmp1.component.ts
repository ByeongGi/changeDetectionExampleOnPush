import { Component, OnInit, AfterViewChecked, NgZone, ViewContainerRef } from '@angular/core';
import { CheckEventService } from '../check-event.service';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css'],
})
export class Cmp1Component implements OnInit, AfterViewChecked {
  ngOnInit() {}

  constructor(private ch: CheckEventService, private el: ViewContainerRef, private zone: NgZone) {}
  ngAfterViewChecked(): void {
    console.log('TEST');
    // this.msg = '변화감지!';
    this.ch.checkEvent(this.el, this.zone , '');
  }
}
