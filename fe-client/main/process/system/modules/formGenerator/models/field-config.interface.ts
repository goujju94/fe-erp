import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  // name: string;
  hideLabel?: boolean,
  prefix?: string,
  suffix?: string,
  customCssClass: string,
  description?: string; 
  code: string;
  flexiLabel: string;
  options?: string[];
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  customValidator?: Object;
  validators?: Object[];
  formClassValidator?: Object;
  value?: any;
  labelPosition?: string,
  labelWidth?: number ,
  hidden?: boolean ,
  labelMargin?: number,
  tabIndex?: string,
  marginTop?: string,
  marginRight?: string,
  marginBottom?: string,
  marginLeft?: string,
  width?:string
}
