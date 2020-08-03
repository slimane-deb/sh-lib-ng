import {DatePipe, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

export class DateUtils {

  static format(date: Date, pattern: string): string {
    // datepipe: DatePipe = new DatePipe();
   return  new DatePipe('fr').transform(date, pattern);
  }
}
