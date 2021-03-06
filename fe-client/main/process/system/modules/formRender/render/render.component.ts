import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { RenderService } from '@L3Process/system/modules/formRender/render/services/render.service';
import { AllCompService } from '@L3Process/system/modules/formRender/render/services/all-comp.service';
import { RenderDirective } from '@L3Process/system/modules/formRender/render/render.directive';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css'],
})
export class FeRenderComponent implements OnInit {
  @Input() config: any[] = [];

  @ViewChild(RenderDirective) host: RenderDirective;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  private form: FormGroup;

  private current_component;

  constructor(private formBuilder: FormBuilder, private renderService: RenderService, private allComp: AllCompService, private comFact: ComponentFactoryResolver) { }

  ngOnInit() {
    this.form = this.createGroup();
    this.config.forEach((ele, i) => {
      this.allComp.elements.forEach((e) => {
        if (ele.name == e.name) {
          const factory = this.comFact.resolveComponentFactory<any>(e.component);
          this.current_component = this.vc.createComponent(factory);
          this.current_component.instance.config = ele.property;
          this.current_component.instance.group = this.form;
        }
      });
    });
  }

  createGroup() {
    const group = this.formBuilder.group({});
    this.config.forEach(control => {
      group.addControl(control.property.formcontrol, this.formBuilder.control(''))
    });
    return group;
  }

}
