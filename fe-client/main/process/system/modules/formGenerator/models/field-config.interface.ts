import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  // name: string;
  id?: string,
  hideLabel?: boolean,
  prefix?: string,
  suffix?: string,
  customCssClass: string,
  description?: string;
  code: string;
  flexiLabel: string;
  options?: string[];
  isParent?: string;
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  customValidations?: {
    [key: string]: { name: string, validatorFn: any, message: string }
  };
  jsonValidations?: { json: object, message: string },
  validations?: {
    [key: string]: {
      name: string,
      value: any,
      message: string
    }
  };
  formClassValidations?: {
    [key: string]: { name: string, validatorFuncName: string, message: string }
  };
  mask?: Array<string>;
  value?: any;
  labelPosition?: string,
  labelWidth?: number,
  hidden?: boolean,
  labelMargin?: number,
  tabIndex?: string,
  marginTop?: string,
  marginRight?: string,
  marginBottom?: string,
  marginLeft?: string,
  width?: string,
  style?: object,
  events: object
  condition?: object,
}
