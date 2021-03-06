import { Directive, ViewContainerRef, ElementRef, Attribute} from '@angular/core';

@Directive({
  selector: '[appButtonElement]'
})
export class FeButtonElementDirective {

  constructor(public ViewContainerRef: ViewContainerRef, public ElementRef: ElementRef, @Attribute('attribute') public param:String) { }

}
