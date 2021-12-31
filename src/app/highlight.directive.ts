import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  #el: HTMLLIElement | undefined;

  @Input() appHighlight = '';

  constructor(el: ElementRef<HTMLLIElement>) {
    this.#el = el.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.#highlight(this.appHighlight);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.#highlight('');
  }

  #highlight = (color: string) => {
    if (!this.#el) return;
    this.#el.style.background = color;
  }
}
