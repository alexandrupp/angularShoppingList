import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isDisabled: boolean = true;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("click") dropdownClick(eventData: Event) {
    if (this.isDisabled) {
      this.renderer.addClass(this.elRef.nativeElement, "open");
    }
    else {
      this.renderer.removeClass(this.elRef.nativeElement, "open");
    }
    this.isDisabled = !this.isDisabled;
  }

}