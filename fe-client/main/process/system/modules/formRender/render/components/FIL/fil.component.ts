import { Component, OnInit, Input, Inject, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FILElementDirective } from '@L3Process/system/modules/formRender/render/components/FIL/directives/element.directive';

@Component({
  selector: 'app-file',
  templateUrl: './fil.component.html',
  styleUrls: ['./fil.component.css'],
  providers: [Inject]
})
export class FeFILComponent implements OnInit {
  @ViewChild(FILElementDirective) element: FILElementDirective;

  @Input() config;
  @Input() group;

  private lable: string;
  private name: string;
  private options = [];
  private maxlength: number;
  private restrict: any;

  constructor(private render: Renderer2, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //getting all the properties of Input component
    let lable = this.lable = this.config.lable;
    this.name = this.config.formcontrol;
    let type = this.config.type;
    let width = this.config.width;
    let height = this.config.height;
    let id = this.config.id;
    let elementStyle = [] = this.config.style;
    //----------------------------------------------------------
    this.element.ElementRef.nativeElement.style.width = width;
    this.element.ElementRef.nativeElement.style.height = height;
    this.element.ElementRef.nativeElement.id = id;
    this.element.ElementRef.nativeElement.type = type;

    if (elementStyle) {
      elementStyle.forEach((c) => {
        this.render.setStyle(this.element.ElementRef.nativeElement, c.name, c.value);
      });
    }
  }
}
