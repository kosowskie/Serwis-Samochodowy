import {Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit} from '@angular/core';
import {Car} from '../models/car';
import {TotalCostComponent} from '../total-cost/total-cost.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;
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
    },
    {
      id: 2,
      model: 'Peugeot 306',
      plate: 'GD223F',
      deliveryDate: '22-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Andrzej',
        surname: 'Lepper'
      },
      cost: 50,
      isFullyDamaged: false
    },
    {
      id: 3,
      model: 'Skoda Fabia',
      plate: 'GD322F',
      deliveryDate: '21-05-2017',
      deadline: '05-05-2019',
      client: {
        firstName: 'Leszek',
        surname: 'Miller'
      },
      cost: 500,
      isFullyDamaged: false
    },
    {
      id: 4,
      model: 'Fiat Punto',
      plate: 'GD242A',
      deliveryDate: '22-11-2017',
      deadline: '05-05-2018',
      client: {
        firstName: 'Krzysztof',
        surname: 'Tyniec'
      },
      cost: 800,
      isFullyDamaged: true
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.countTotalCost();
  }

  ngAfterViewInit(): void{
    this.totalCostRef.showGross();
  }

  showGross(): void{
    this.totalCostRef.showGross();
  }

  countTotalCost(): void{
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost: number): void{
    this.grossCost = grossCost;
  }
}
