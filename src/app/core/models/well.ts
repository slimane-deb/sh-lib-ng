import {Address} from './address';

export class  Well {
  id: string;
  name: string;
  companyId: string;
  address: Address;
  spud_date?: Date;
  completion_well?: string;
}
