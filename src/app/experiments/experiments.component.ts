import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserActivity } from '../user-activity.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css'],
})
export class ExperimentsComponent implements OnInit {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: any[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  toppingList = [
    {
      name: 'Extra cheese',
      id: 'extra-cheese',
    },
    {
      name: 'Mushroom',
      id: 'mushroom',
    },
    {
      name: 'Onion',
      id: 'onion',
    },
    {
      name: 'Pepperoni',
      id: 'pepperoni',
    },
    {
      name: 'Sausage',
      id: 'sausage',
    },
    {
      name: 'Tomato',
      id: 'tomato',
    },
  ];

  selectedToppings = [];

  constructor(private userActivityService: UserActivity) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges.map(
      query => (query === '' ? [] : this.filterStates(query)),
    );

    // const timer$ = Observable.timer(0, 1000);

    // this.userActivityService
    //   .makePausable(timer$)
    //   .subscribe(x => console.log(x));
  }

  compareSelection(o1: any, o2: any): boolean {
    return o1.id === o2.id;
  }

  selectSomeToppings() {
    this.selectedToppings = [
      {
        name: 'Extra cheese',
        id: 'extra-cheese',
      },
      {
        name: 'Mushroom',
        id: 'mushroom',
      },
      {
        name: 'Onion',
        id: 'onion',
      },
    ];
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  foo(e) {
    console.log(e);
  }

  ngOnInit() {}
}
