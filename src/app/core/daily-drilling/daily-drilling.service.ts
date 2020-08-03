import { Injectable } from '@angular/core';
import {Report} from '../models/report';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyDrillingService {
  reports: Report[]  = [
    {
     id: 1,
     date: '11/11/2011',
     title: 'ENF16_DLA-1Ter DDR -N°02-05.02.2020'
    },
    {
     id: 2,
     date: '11/11/2011',
     title: 'ENF17_DLA-1Ter DDR -N°02-05.02.2020'
    },
    {
     id: 3,
     date: '11/11/2011',
     title: 'ENF18_DLA-1Ter DDR -N°02-05.02.2020'
    },
    {
     id: 4,
     date: '11/11/2011',
     title: 'ENF19_DLA-1Ter DDR -N°02-05.02.2020'
    },
    {
     id: 5,
     date: '11/11/2011',
     title: 'ENF19_DLA-1Ter DDR -N°02-05.02.2020'
    },
    {
     id: 6,
     date: '11/11/2011',
     title: 'ENF99_DLA-1Ter DDR -N°02-05.02.2020'
    },
  ];

  constructor() { }
  getAll(): Observable<Report[]>{
    return of(this.reports);
  }
  deleteById(id: number): Observable<any>{
    return of('Row Deleted');
  }
}
