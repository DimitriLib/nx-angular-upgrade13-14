import { Component, OnInit } from '@angular/core';
import { HelloFacade } from '@test/hello/domain';

@Component({
  selector: 'hello-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  helloList$ = this.helloFacade.helloList$;

  constructor(private helloFacade: HelloFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.helloFacade.load();
  }
}
