import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Hello } from '../entities/hello';
import { HelloDataService } from '../infrastructure/hello.data.service';

@Injectable({ providedIn: 'root' })
export class HelloFacade {
  private helloListSubject = new BehaviorSubject<Hello[]>([]);
  helloList$ = this.helloListSubject.asObservable();

  constructor(private helloDataService: HelloDataService) {}

  load(): void {
    this.helloDataService.load().subscribe({
      next: (helloList) => {
        this.helloListSubject.next(helloList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
