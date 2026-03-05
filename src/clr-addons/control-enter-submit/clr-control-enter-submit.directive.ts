import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  Optional,
  Renderer2,
} from '@angular/core';
import { ClrForm } from '@clr/angular';

export interface ClrControlEnterSubmitTranslationService {
  translate(key: string): string;
}

export const CLR_CONTROL_ENTER_SUBMIT_TRANSLATION = new InjectionToken<ClrControlEnterSubmitTranslationService>(
  'CLR_CONTROL_ENTER_SUBMIT_TRANSLATION'
);

@Directive({
  selector: 'form[clrControlEnterSubmit]',
  standalone: false,
})
export class ClrControlEnterSubmitDirective implements AfterContentInit {
  @Input('clrControlEnterSubmit') translationKey: string | undefined;

  constructor(
    private el: ElementRef<HTMLFormElement>,
    private renderer: Renderer2,
    @Optional() private clrForm: ClrForm,
    @Optional()
    @Inject(CLR_CONTROL_ENTER_SUBMIT_TRANSLATION)
    private translationService: ClrControlEnterSubmitTranslationService
  ) {}

  ngAfterContentInit(): void {
    const submitButtons = this.el.nativeElement.querySelectorAll('button[type="submit"]');

    if (this.translationKey && this.translationService) {
      const translatedText = this.translationService.translate(this.translationKey);
      if (translatedText) {
        submitButtons.forEach(button => {
          this.renderer.setAttribute(button, 'title', translatedText);
        });
      }
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey) && !event.shiftKey) {
      event.stopPropagation();

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      if (this.clrForm) {
        this.clrForm.markAsTouched();
      }

      this.el.nativeElement.requestSubmit();
    }
  }
}
