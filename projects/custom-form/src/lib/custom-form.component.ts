import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DxFormComponent} from 'devextreme-angular';
import {FormType} from './formModel/formType';
import {FormFile} from './formModel/formFile';
import {CustomFormService} from './custom-form.service';
import {ActionButton} from './formModel/action-button';
import {TitleDesc} from './formModel/title-desc';
import {FormField} from './formModel/formField';

@Component({
  selector: 'lib-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['custom-form.component.scss']
})
export class CustomFormComponent implements OnInit, AfterViewInit {

  @ViewChild(DxFormComponent) myform: DxFormComponent;

  @Input()
  classNameStr: string;

  @Input()
  colNumber = 2;

  @Input()
  width: number = null;

  @Input()
  handlerInstantition: object;

  formTitle: string;

  validationButton;
  cancelButton: string;
  resetButton: string;

  formData: any[] = [];

  private keysClass: string[] = [];

  Types = FormType;

  @Output()
  displayButton = new EventEmitter<any>();

  @Output()
  displayTitle = new EventEmitter<any>();
  invalidForm = false;
  @Input()
  actionsVisible = true;


  constructor(private formProvider: CustomFormService) {
    this.setDataToTable = this.setDataToTable.bind(this);
    this.publishButton = this.publishButton.bind(this);
    this.publishTitle = this.publishTitle.bind(this);
    this.generateDataToSend = this.generateDataToSend.bind(this);
    this.setAsynDatas = this.setAsynDatas.bind(this);

  }


  ngOnInit() {
    this.setDataToTable();
  }
  ngAfterViewInit(): void {
    console.log(this.myform.instance.getEditor('formGroup'));
    }

  setDataToTable() {
    let  k = 0; // sections counter
    let j = 0; // elements/section counter
    const classForm = new (this.handlerInstantition as any)[this.classNameStr]();
    const attributeAccess = classForm.__proto__;
    // form class fields
    const keys: string[] = this.getAttributeList(attributeAccess);
    const idx = keys.indexOf('headers');
    if (idx > -1) {
      this.formTitle = attributeAccess.headers.title;
      this.validationButton = attributeAccess.headers.saveButton;
      this.cancelButton = attributeAccess.headers.cancelButton;
      // this.resetButton = attributeAccess.headers.resetButton;
      // this.publishButton();
      // this.publishTitle();
      keys.splice(idx, 1);
    }
    let formFile: FormFile = null;
    let tabForm: FormField[] = [];
    let lastSection = false;
    for (let i = 0; i < keys.length; i++) {
      const elmt = keys[i];
      if (typeof attributeAccess[elmt] === 'string') { // Section is string field
        // new Section in the form
        if (lastSection) {
          formFile.sectionElements = [...tabForm];
          this.formData.push({...formFile});
          k++;
          j = 0; // reset counter
        }
        formFile = new FormFile(attributeAccess[elmt]);
        tabForm.length = 0;
        tabForm = [];
        lastSection = true;
        keys.splice(i, 1);
        i--;
      } else {
        if (!lastSection) {
          formFile = new FormFile('');
          lastSection = true;
        }
        // get fields value
        if (attributeAccess[elmt].type === FormType.SELECT) {
          if (!attributeAccess[elmt].datas.hostname) {
            if (attributeAccess[elmt].defaultValue) {
              attributeAccess[elmt].selected = attributeAccess[elmt].defaultValue;
            }
            else { attributeAccess[elmt].selected = -1; }
          }
          else {
            this.setAsynDatas(attributeAccess[elmt], k, j);
          }
        }
        if (attributeAccess[elmt].type === FormType.CHEKBOX) {
          attributeAccess[elmt].datas.forEach(val => val.selected = false);
          attributeAccess[elmt].defaultValue.map(ind => {
            const taille = attributeAccess[elmt].datas.length;
            if ( ind > -1 && ind < taille ) { attributeAccess[elmt].datas[ind].selected = true; }
          });
        }
        if (attributeAccess[elmt].type === FormType.RADIO) {
          if (attributeAccess[elmt].defaultValue) {
            attributeAccess[elmt].selected = attributeAccess[elmt].datas[attributeAccess[elmt].defaultValue].value;
          }
          else { attributeAccess[elmt].selected = 0; }
        }
        if (attributeAccess[elmt].type === FormType.DATE) {
          if (typeof(attributeAccess[elmt].defaultValue) !== 'string') {
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();
            const date = month + '/' + day + '/' + year;
            attributeAccess[elmt].defaultValue = date;
          }
        }

        tabForm.push({...attributeAccess[elmt]});
        j++;
      }
    }
    this.keysClass = keys;
    formFile.sectionElements = [...tabForm];
    this.formData.push({...formFile});
    k++;
    if (this.formData.length < this.colNumber) {
      this.colNumber = this.formData.length;
    }

  }

  setAsynDatas(elmt: any, indexI: any, indexJ: any) {
    elmt.customData = [];
    this.formProvider.getItems(elmt.datas.toJSON()).subscribe(
      res => {
        elmt.customData = res;
        elmt.selected = elmt.defaultValue;
        console.log(indexI + '      ' + indexJ);
        const id = setInterval(() => {
          if (this.formData[indexI] !== undefined && this.formData[indexI].sectionElements[indexJ] !== undefined) {
            Object.assign(this.formData[indexI].sectionElements[indexJ], {...elmt});
            clearInterval(id);
          }
        }, 400);
      },
      err => console.log(err));
  }

  changeListVisibilityElements(formFieldNames: string[], visibility: boolean) {
    const datas1: FormFile[] = [];
    let update = false;
    this.formData.map(elmt => {
      const obj = {} as FormFile;
      obj.section = elmt.section;
      obj.sectionElements = [];
      elmt.sectionElements.map(elment => obj.sectionElements.push({...elment}));
      datas1.push(obj);
    });

    formFieldNames.map(elmt => {
      let index = 0;
      const idx = this.keysClass.indexOf(elmt);
      if (idx > -1) {
        for (let i of datas1) {
          const elmts = i.sectionElements;
          for (let j of elmts) {
            const formField = j;
            if (index == idx) {
              if (formField.isInvisible != visibility) {
                formField.isInvisible = visibility;
                update = true;
              }
              index++;
              break;
            }
            index++;
          }
        }
      }
    });
    if (update) {
      this.formData.length = 0;
      this.formData = [...datas1];
    }
  }

  changeDisabledElement(formFieldName: string, visibility: boolean) {
    let index = 0;
    const idx = this.keysClass.indexOf(formFieldName);
    if (idx > -1) {
      for (let i of this.formData) {
        const elmts = i.sectionElements;
        for (let j of  elmts) {
          if (index == idx) {
            j.disabled = visibility;
            index++;
            break;
          }
          index++;
        }
      }
    }
  }

  changeListDisabledElements(formFieldNames: string[], visibility: boolean) {
    formFieldNames.map(elmt => this.changeDisabledElement(elmt, visibility));
  }

  getAttributeList<T>(obj: T) {
    return Object.keys(obj);
  }

  publishButton(event) {
    // this.myform.instance.validate();
    console.log(event);
    const btns: ActionButton[] = [];
    btns.push({
      title : this.validationButton,
      type : 0,
      function : 'sendForm',
      items : []
    });
    this.cancelButton && btns.push({
      title : this.cancelButton,
      items : [],
      type : 1,
      function : 'cancelSendForm'
    });
    this.resetButton && btns.push({
      title : this.resetButton,
      items : [],
      type : 1,
      function : 'resetSendForm'
    });
    this.displayButton.emit(btns);
  }

  publishTitle() {
    const infos: TitleDesc = {
      title : this.formTitle,
      description : ''
    };
    this.displayTitle.emit(infos);
  }

  generateDataToSend() {
    if (!this.myform.instance.validate().isValid) {
      return [];
    }
    const dataToSend: any [] = [];
    let index = 0;
    for (let i of this.formData) {
      const elmts = i.sectionElements;
      for (let j  of elmts) {
        const formField = j;
        switch (formField.type) {
          case FormType.INPUT :
            const data = {};
            data[this.keysClass[index]] = formField.defaultValue;
            dataToSend.push(data);
            index ++;
            break;
          case FormType.TEXTAREA :
            const data1 = {};
            data1[this.keysClass[index]] = formField.defaultValue;
            dataToSend.push(data1);
            index ++;
            break;
          case FormType.DATE :
            const data2 = {};
            data2[this.keysClass[index]] = formField.defaultValue;
            dataToSend.push(data2);
            index ++;
            break;
          case FormType.NUMBER_PICKER:
            const data6 = {};
            data6[this.keysClass[index]] = formField.defaultValue;
            dataToSend.push(data6);
            index++;
            break;
          case FormType.RADIO :
            const data3 = {};
            data3[this.keysClass[index]] = formField.selected;
            dataToSend.push(data3);
            index ++;
            break;
          case FormType.CHEKBOX :
            const data4 = {};
            data4[this.keysClass[index]] = formField.datas.filter(elt => elt.selected == true).map(elmt => elmt.value);
            dataToSend.push(data4);
            index ++;
            break;
          case FormType.SELECT :
            const data5 = {};
            if (formField.multiple) { data5[this.keysClass[index]] = formField.defaultValue; }
            else { data5[this.keysClass[index]] = formField.selected; }
            dataToSend.push(data5);
            index ++;
            break;
        }
      }
    }
    return dataToSend;
  }

}
