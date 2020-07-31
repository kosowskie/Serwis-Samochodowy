import { Component, OnInit } from '@angular/core';
import {Car} from '../models/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

  cars: Car[] = [
    {
      id: 1,
      model: 'Renault Clio',
      plate: 'GD222F',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: true
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
