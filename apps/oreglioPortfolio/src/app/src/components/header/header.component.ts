import { Component } from '@angular/core';
import { TranslatorModule } from '../../../../features/translator/translator.module';
import { SiteBtnsGroupComponent } from '../site-btns-group/site-btns-group.component';
import { BtnConfig } from '../../../../core/models/button-config.type';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [TranslatorModule, SiteBtnsGroupComponent, MatIconModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    headerBtns: BtnConfig[] = [
        {
            label: 'About',
            themeColor: 'transparent',
        },
        {
            label: 'Portfolio',
            themeColor: 'transparent',
        },
        {
            label: 'Contact',
            themeColor: 'primary',
        },
    ];
}
