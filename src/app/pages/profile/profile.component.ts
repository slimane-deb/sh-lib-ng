import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: '115978D',
      FirstName: 'Slimane',
      LastName: 'Deb',
      Prefix: 'Mrs.',
      Position: 'Developer',
      Picture: 'assets/img/man.png',
      BirthDate: new Date('1994/11/15'),
      HireDate: new Date('2015/05/11'),
      Notes: 'Slimane is Skilled Software Engineer',
      Address: '4600 N Virginia Rd.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
