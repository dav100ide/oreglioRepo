import { Component, Input, OnInit } from '@angular/core';
import { BtnConfig } from '../../../../core/models/button-config.type';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'site-btn',
    standalone: true,
    imports: [TranslateModule, CommonModule, RouterLink, MatIconModule],
    templateUrl: './site-btn.component.html',
    styleUrl: './site-btn.component.scss',
})
export class SiteBtnComponent {
    @Input({ required: true }) btnConfig!: BtnConfig;
    public get onlyIcon(): boolean {
        if ((this.btnConfig.svgIcon || this.btnConfig.iconName) && !this.btnConfig.label) {
            return true;
        }
        return false;
    }
}
