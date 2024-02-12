import { Component } from '@angular/core';
import { PillComponent } from '../../../../components/pill/pill.component';
import { InfoCardComponent } from '../../../../components/info-card/info-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'about',
    standalone: true,
    imports: [PillComponent, InfoCardComponent, TranslateModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {}
