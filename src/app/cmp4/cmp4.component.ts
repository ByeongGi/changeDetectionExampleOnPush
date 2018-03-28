import { Component, OnInit, AfterViewChecked, ViewContainerRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { CheckEventService } from '../check-event.service';

@Component({
  selector: 'app-cmp4',
  templateUrl: './cmp4.component.html',
  styleUrls: ['./cmp4.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class Cmp4Component implements OnInit, AfterViewChecked {

  ngOnInit() {
  }
  constructor(private ch: CheckEventService, private el: ViewContainerRef, private zone: NgZone) {}

  ngAfterViewChecked(): void {
    console.log('TEST');
    // this.msg = '변화감지!';
    this.ch.checkEvent(this.el, this.zone , '');
  }
}
