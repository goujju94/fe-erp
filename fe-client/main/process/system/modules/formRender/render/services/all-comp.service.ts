import { Injectable } from '@angular/core';
import { TXTComponent } from '@L3Process/system/modules/formRender/render/components/TXT/txt.component';
import { BTNComponent } from '@L3Process/system/modules/formRender/render/components/BTN/btn.component';
//import { TextareaComponent } from '@L3Process/system/modules/formRender//render/components/textarea/textarea.component';

@Injectable({
  providedIn: 'root'
})
export class FeAllCompService {

  constructor() { }

  public elements = [
    {name:'input' , component: TXTComponent},
    //{name:'textarea' , component: TextareaComponent},
    {name:'button' , component: BTNComponent}
  ]

}