import {FormDeco, FormHeader, FormType, SectionForm} from 'projects/custom-form/src/lib';

@FormHeader({
  title : 'Head Info'
})
export class FormPersonnel {

  @SectionForm('1')
  section;

  @FormDeco({
    label: 'WELL & SIDETRACK',
    type: FormType.SELECT,
    datas: [{value: 0, text: 'DLA'}, {value: 1, text: 'ATK'}, {value: 2, text: 'HMD'}],
    required: true,
  })
  wellSideTrack;
  @FormDeco({
    label: 'DATE',
    type: FormType.DATE,
    required: true,
    defaultValue: new Date()
  })
  date;
  @FormDeco({
    label: 'DAY',
    type: FormType.NUMBER_PICKER,
    required: true,
    defaultValue: 1
  })
  day;
  @FormDeco({
    label: 'DOP',
    type: FormType.INPUT,
  })
  dop;
  @FormDeco({
    label: 'DFS',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  dfs;
  @FormDeco({
    label: 'TMD',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  tmd;



}
