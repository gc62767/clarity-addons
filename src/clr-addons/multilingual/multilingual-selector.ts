import { Component, EventEmitter, Input, Output } from '@angular/core';
import { angleIcon, ClarityIcons } from '@cds/core/icon';

ClarityIcons.addIcons(angleIcon);

@Component({
  selector: 'clr-multilingual-selector',
  template: `
    <div>
      <clr-dropdown [clrCloseMenuOnItemClick]="true">
        <button
          type="button"
          class="btn btn-outline btn-sm clr-multilingual-button"
          clrDropdownTrigger
          [disabled]="disabled"
        >
          {{ selectedLang }}
          <cds-icon shape="angle" direction="down"></cds-icon>
        </button>
        <clr-dropdown-menu *clrIfOpen>
          <ng-container *ngFor="let text of texts | keyvalue">
            <div
              *ngIf="text.key !== selectedLang"
              class="clr-multilingual-dd-entry"
              clrDropdownItem
              (click)="selectedLangChange.emit(text.key)"
            >
              <span class="label">{{ text.key }}</span
              >{{ text.value }}
            </div>
          </ng-container>
        </clr-dropdown-menu>
      </clr-dropdown>
    </div>
  `,
  standalone: false,
})
export class ClrMultilingualSelector {
  @Input() disabled: boolean;
  @Input() texts: Map<string, string>;
  @Input() selectedLang: string;
  @Output() selectedLangChange = new EventEmitter<string>();
}
