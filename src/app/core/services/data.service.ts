import { Injectable } from '@angular/core';
import {Company} from '../models/company';
import {HttpClient} from '@angular/common/http';
import {Project} from '../models/project';
import {Site} from '../models/site';
const companies: Company[] = [
  {
  id: 1,
  name: 'SONATRACH',
  address: {
   location: 'Cité Malki',
  city: 'Hydra',
  state: 'Alger',
  },
  phone: '021223344',
  website: 'http://www.sonatrach.com'
},
  {
  id: 2,
  name: 'ENTP',
  address: {
    location: 'Hassi Berkine',
    city: 'Hassi Messaoud',
    state: 'Ouargla',
  },
  phone: '021223344',
  website: 'http://www.entp.dz'
}
];
const projects: Project[] = [
  {
    id: 1,
    name: 'Oued Noumer',
    companyId: '1',
    sites:  [
      {
      id: 1,
      name: 'Ait Khir',
        wells: [{
          id: 1,
          companyId: 1,
          name: 'DLA-1Ter',
          address: {
            location: 'Hassi Messaoud',
            city: 'Hassi Messaoud',
            state: 'Ouargla'
          }
        }, {
          id: 2,
          companyId: 1,
          name: 'DMS-8',
          address: {
            location: 'Berkine',
            city: 'Hassi Messaoud',
            state: 'Ouargla'
          }
        }
          ]
    }
    ]
  }
];

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  getCompanies(): Company[] {
    return companies;
  }
  getCompanyById(id): Company{
    return companies.find(x => x.id === id);
  }

  getProjectsByComp(compId: number = 1): Project[]{
    return projects;
  }

}
