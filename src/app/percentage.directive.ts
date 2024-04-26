import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPercentage]'
})
export class PercentageDirective {

  constructor( private el: ElementRef) { }
  
  @HostListener('input', ['$event']) onInput(event: any) {
    const initialValue: string = event.target.value;

  
    const numericValue: string = initialValue.replace(/[^0-9.]/g, '').substring(0, 2);

  
    const finalValue: string = numericValue.length > 0 ? numericValue + '%' : '';

  
    this.el.nativeElement.value = finalValue;
  }
}
