import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'txt-input',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.css', '../baseField/baseField.component.css']
})
export class FeTxtComponent extends FeBaseField  implements OnInit, DoCheck {
  showEdit = true;
  properties={
  label: 'test',
  prefix: '',
  suffix: '',
  description: '',
  placeholder: 'test',
  tooltip: ''};

  ngOnInit() {
    // this.properties = {
    //   label: 'test',
    //   prefix: '',
    //   suffix: '',
    //   description: '',
    //   placeholder: 'test',
    //   tooltip: ''
    // };
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  ngDoCheck() {
    const propsFromMasterForm = this.masterFormService.retrieveSelectedComponentProperties();
    if (propsFromMasterForm) {
      this.update(propsFromMasterForm);
  }
}


  openModal() {
    this.masterFormService.setProperties(this.properties);
    this.fieldControlService.getFieldRef().parent.openModal();
  }

  update(propsFromMasterForm) {

    this.properties = {
      ...propsFromMasterForm
    };
    console.log("txt comp",this.properties);
  }

  }

