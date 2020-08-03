import { Injectable } from '@angular/core';
import {Company} from '../models/company';
import {HttpClient} from '@angular/common/http';
import {Project} from '../models/project';
import {Site} from '../models/site';
const companies: Company[] = [
  {
  id: '1',
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
  id: '2',
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
    id: 'l5VzvBSlPv',
    name: 'IN AMENAS',
    companyId: '1',
    def_mag_model : 'IGRF200510',
    description : '',
    sites:  [
      {
      id: '11',
      name: 'Ait Khir',
      wells: [{
          id: '111',
          companyId: '1',
          name: 'DLA-1Ter',
          address: {
            location: 'Hassi Messaoud',
            city: 'Hassi Messaoud',
            state: 'Ouargla'
          }
        }, {
          id: '112',
          companyId: '1',
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
  },
  {
    id : 'eJUvp9t9cG',
    name : 'HASSI MESSAOUD',
    def_mag_model : 'WMM_2000',
    description : ''
  },
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
