export class Person{
  id: string;
  firstName: string;
  lastName: string;
  companyId?: string;

  constructor(id: string, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }


}
