import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharacter]'
})
export class CharacterDirective {

  constructor() { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const allowedChars = /[A-Za-z\s]/; 
    const inputChar = String.fromCharCode(event.charCode);
    if (!allowedChars.test(inputChar)) {
      event.preventDefault(); 
    }
  }
}
