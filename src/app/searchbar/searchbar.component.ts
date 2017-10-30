import { Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input() query: string;
  @Output() queryChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateQuery() {
    this.queryChange.next(this.query);
  }

}
