import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'pill',
    standalone: true,
    imports: [TranslateModule],
    template: `
        <div class="d-inline-block py-2 px-3 | pill">
            {{ label | translate }}
        </div>
    `,
    styleUrl: './pill.component.scss',
})
export class PillComponent {
    @Input({ required: true }) label!: string;
}
