import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'test';
  ngOnInit() {
    console.log("test")
  }
}
