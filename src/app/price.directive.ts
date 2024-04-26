import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrice]'
})
export class PriceDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const inputElement: HTMLInputElement = this.el.nativeElement;


    let value: string = inputElement.value;


    value = value.replace(/[^0-9.]/g, '');
    const dotIndex = value.indexOf('.');
    if (dotIndex !== -1) {
      value = value.substring(0, dotIndex) + '.' + value.substring(dotIndex + 1).replace(/\./g, '');
    }


    const decimalIndex = value.indexOf('.');
    if (decimalIndex !== -1 && value.substring(decimalIndex + 1).length > 2) {
      value = value.substring(0, decimalIndex + 3);
    }

  
    inputElement.value = value;
  }

}