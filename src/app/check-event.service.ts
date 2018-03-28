import { Injectable, NgZone, ViewContainerRef } from '@angular/core';

@Injectable()
export class CheckEventService {
  constructor() {}

  checkEvent(vr: ViewContainerRef, zone: NgZone, className: string = 'checked') {
    const a = vr.element.nativeElement.querySelector('a');
    console.log(a.style.backgroundColor = 'red');

    zone.runOutsideAngular(() => {
      setTimeout(() => {
        a.style.backgroundColor = 'blue';
      }, 2000);
  });
  }
}


// export function toggleClass(el, zone, className = 'checked') {
//   const a = el.nativeElement.querySelector('a');
//   a.classList.add(className);
//   zone.runOutsideAngular(() => {
//       setTimeout(() => {
//           a.classList.remove(className);
//       }, 2000);
//   });
// }
