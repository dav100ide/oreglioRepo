import { Component } from '@angular/core';
import { BtnConfig } from '../../../../core/models/button-config.type';
import { SiteBtnsGroupComponent } from '../site-btns-group/site-btns-group.component';
import { Constants } from '../../../../core/constants/constants';

@Component({
    selector: 'info-card',
    standalone: true,
    imports: [SiteBtnsGroupComponent],
    template: `
        <div class="p-5 rounded d-flex flex-column gap-4 card">
            <div class="photo">
                <img src="assets/images/avatar-oreglio.jpeg" alt="davide oreglio" />
            </div>
            <div class="info">
                <h3>Davide Oreglio</h3>
                <ul class="reset-list">
                    <li>
                        <a href="tel:00393388165049"> 📞+39 338 8165049 </a>
                    </li>
                    <li>📧 oreglio.dev&#64;gmail.com</li>
                </ul>
            </div>
            <div>
                <site-btns-group [btns]="infoBtns" />
            </div>
        </div>
    `,
    styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
    infoBtns: BtnConfig[] = [
        {
            svgIcon: 'github',
            themeColor: 'primary',
            href: Constants.githubUrl,
        },
        {
            svgIcon: 'linkedin',
            themeColor: 'primary',
            href: Constants.linkedinUrl,
        },
        {
            label: 'DownloadCv',
            themeColor: 'secondary',
            iconName: 'rocket_launch',
        },
    ];
}
