import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input() color: string = 'dark-gray';
  @Input() fontSize: number = 1;
  @Input('aria-label') ariaLabel;

  constructor() { }

  ngOnInit() {
  }

}
