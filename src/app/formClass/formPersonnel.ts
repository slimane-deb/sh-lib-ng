import {FormDeco, FormHeader, FormType, SectionForm} from 'projects/custom-form/src/lib';

@FormHeader({
  title : 'Test form'
})
export class FormPersonnel {

  @SectionForm('1')
  section;

  @FormDeco({
    label: 'adad',
    type: FormType.INPUT,
    defaultValue: '',
    required: true,
    patternErroString: 'bele3eh',
    lengthString: true,
    max: 20,
    lengthErrorString: 'kharay',
    isEmail: true,
    isEmailErrorString: 'awediii',
  })
  title;

  @FormDeco({
    label: 'ad',
    type: FormType
      .SELECT,
    datas: [{value: 0, text: 'wehed'}, {value: 1, text: 'zouj'}, {value: 2, text: 'tleta'}],
    // datas : new URL("http://dummy.restapiexample.com/api/v1/employees"),
    // valueTextUrl : {valueKey : "id", textKey : "employee_name"},
    required: true,
    multiple: false,
    defaultValue: 2
  })
  name;

}
