import { Injectable } from '@angular/core';
import {Well} from '../models/well';
const wells: Well[] = [{
  id: '1',
  companyId: '1',
  name: 'DLA-1Ter',
  address: {
    location: 'Hassi Messaoud',
    city: 'Hassi Messaoud',
    state: 'Ouargla'
  }
}, {
  id: '2',
  companyId: '1',
  name: 'DMS-8',
  address: {
    location: 'Berkine',
    city: 'Hassi Messaoud',
    state: 'Ouargla'
  }
}

];
@Injectable()
export class WellService {

  constructor() { }
  getAll(): Well[]{
    return wells;
  }
  getById(coId: string): Well{
    return wells.find(x => x.companyId = coId);
  }
}
