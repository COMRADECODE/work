import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlueDirective]'
})
export class BlueDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

}
