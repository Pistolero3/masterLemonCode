import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class RotateDirective implements OnInit {
  @Input() rotate: string = '0'; // Rotación inicial en grados (por defecto 0)
  @Input() step: string = '10'; // Paso de rotación en grados (por defecto 10)

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyRotation();
  }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const isShiftKey = event.shiftKey;
    const rotation = isShiftKey ? -parseInt(this.step) : parseInt(this.step);
    this.rotateImage(rotation);
  }

  private applyRotation() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `rotate(${this.rotate}deg)`
    );
  }

  private rotateImage(degrees: number) {
    const currentRotation = parseInt(
      this.el.nativeElement.style.transform
        .replace('rotate(', '')
        .replace('deg)', '')
    );
    const newRotation = currentRotation + degrees;
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `rotate(${newRotation}deg)`
    );
  }
}
