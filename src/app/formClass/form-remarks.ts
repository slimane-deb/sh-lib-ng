import {FormDeco, FormHeader, SectionForm} from '../../../projects/custom-form/src/lib/formModel/decoratorForm';
import {FormType} from '../../../projects/custom-form/src/lib/formModel/formType';
@FormHeader({
  title : 'daily notes',
  saveButton: 'Save',
  cancelButton: 'Cancel'
})
export class FormRemarks{
  @SectionForm('remarks')
  section;

  @FormDeco({
    label: 'AFTER MIDNIGHT OPERATIONS',
    type: FormType.TEXTAREA,
    required: true,
  })
  comment_operational;
  @FormDeco({
    label: 'CURRENT OPERATION',
    type: FormType.TEXTAREA,
    required: true,
  })
  status;
  @FormDeco({
    label: '24 Hrs SUMMARY OPERATIONS',
    type: FormType.TEXTAREA,
    required: true,
  })
  comment_summary;
  @FormDeco({
    label: 'PLAN OPERATIONS',
    type: FormType.TEXTAREA,
    required: true,
  })
  comment_forecast_24;
  @FormDeco({
    label: 'REQUIREMENTS / RENTAL EQUIPMENT',
    type: FormType.TEXTAREA,
    required: true,
  })
  comment_general;

  @SectionForm("DAILY NOTES")
  section2;
}
