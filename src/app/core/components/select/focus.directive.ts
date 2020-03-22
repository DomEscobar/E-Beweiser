import { Directive, ElementRef, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[focuses]'
})
export class FocusDirective implements AfterContentChecked
{
  constructor(private elementRef: ElementRef)
  {
  }

  ngAfterContentChecked(): void
  {
    this.elementRef.nativeElement.focus();
  }

}
