import {Site} from './site';

export class Project{
  id: string;
  name: string;
  def_mag_model?: string;
  companyId?: string;
  description?: string;
  sites?: Site[];
}
