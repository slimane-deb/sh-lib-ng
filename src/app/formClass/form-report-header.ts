import {FormDeco, FormHeader, FormType, SectionForm} from 'projects/custom-form/src/lib';

@FormHeader({
  title : 'Head Info',
  saveButton: 'Save',
  cancelButton: 'Cancel'
})
export class FormReportHeader {

  static sectionsNum = 3;
  @SectionForm('1')
  section1;

  @FormDeco({
    label: 'WELL & SIDETRACK',
    type: FormType.SELECT,
    datas: [{value: 0, text: 'DLA'}, {value: 1, text: 'ATK'}, {value: 2, text: 'HMD'}],
    required: true,
  })
  wellSideTrack;
  // @FormDeco({
  //   label: 'DATE',
  //   type: FormType.DATE,
  //   required: true,
  //   defaultValue: new Date()
  // })
  // report_date;
  @FormDeco({
    label: 'DAY',
    type: FormType.NUMBER_PICKER,
    required: true,
    defaultValue: 1
  })
  day_no;
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
  @FormDeco({
    label: 'PROGRESS',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  Progress;
  @FormDeco({
    label: 'FORMATION TOP:',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  Formation;
  @FormDeco({
    label: 'ROT',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  Rot;

  @SectionForm('2')
  section2;

  @FormDeco({
    label: 'SUPERVISOR',
    type: FormType.INPUT,
    required: true,
  })
  Supervisor1;
  @FormDeco({
    label: 'SUPERINTENDENT',
    type: FormType.INPUT,
    required: true,
  })
  Supervisor2;
  @FormDeco({
    label: 'FIELD',
    type: FormType.INPUT,
    required: true,
  })
  fieldName;
  @FormDeco({
    label: 'ACC. FREE',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  accFree;
  @FormDeco({
    label: 'AFE (KD)',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  Afe_Cost;
  @FormDeco({
    label: 'DAILY (KD)',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  Daily_Cost;
  @FormDeco({
    label: 'CUM (KD)',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  Cum_Cost;
  @FormDeco({
    label: 'WELL OBJECTIVE',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  event_objective_1;
  @SectionForm('3')
  section3;

  @FormDeco({
    label: 'LAST CSG/LNR SHOE',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  last_casing_shoe;
  @FormDeco({
    label: 'LAST CSG/LNR TOP',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  last_casing_top;
  @FormDeco({
    label: 'LAST FM. TEST/EMW',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  last_fm_test;
  @FormDeco({
    label: 'L. BOP TEST',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  BopTest;
  @FormDeco({
    label: 'L.SAFETY MEETG',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  SafetyMeeting;
  @FormDeco({
    label: 'DAY DRL NPT',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  NPT_daily;
  @FormDeco({
    label: 'CUM DRL NPT',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  Cum_NPT;
  @FormDeco({
    label: 'L.I.SERVICE',
    type: FormType.NUMBER_PICKER,
    required: true,
  })
  event_team;





}
