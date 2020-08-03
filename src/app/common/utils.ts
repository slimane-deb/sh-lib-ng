
export class Utils {

  static mapFormDeco(obj: any) {
    const tmp: any = {} ;
    for (const i of obj) {
      Object.assign(tmp, i);
    }
    return tmp;
  }

}
