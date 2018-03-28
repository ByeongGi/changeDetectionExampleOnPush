import { Component, OnInit, AfterViewChecked, ViewContainerRef, NgZone } from '@angular/core';
import { CheckEventService } from '../check-event.service';

@Component({
  selector: 'app-cmp8',
  templateUrl: './cmp8.component.html',
  styleUrls: ['./cmp8.component.css']
})
export class Cmp8Component implements OnInit, AfterViewChecked {

  ngOnInit() {
  }
  constructor(private ch: CheckEventService, private el: ViewContainerRef, private zone: NgZone) {}

  ngAfterViewChecked(): void {
    console.log('TEST');
    // this.msg = '변화감지!';
    this.ch.checkEvent(this.el, this.zone , '');
  }
}
