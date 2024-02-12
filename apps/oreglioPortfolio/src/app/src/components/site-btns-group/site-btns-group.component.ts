import { Component, Input } from '@angular/core';
import { SiteBtnComponent } from '../site-btn/site-btn.component';
import { BtnConfig } from '../../../../core/models/button-config.type';

@Component({
    selector: 'site-btns-group',
    standalone: true,
    imports: [SiteBtnComponent],
    templateUrl: './site-btns-group.component.html',
    styleUrl: './site-btns-group.component.scss',
})
export class SiteBtnsGroupComponent {
    @Input({ required: true }) btns!: BtnConfig[];
}
