import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from './icons.const';

@Injectable()
export class IconsService {
    constructor(
        private matIconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
    ) {}
    registerSvgIcons(): void {
        this.load('./assets/svgs');
    }
    private load(path: string): void {
        ICONS.forEach((icon) => {
            this.matIconRegistry.addSvgIcon(
                icon.name,
                this.sanitizer.bypassSecurityTrustResourceUrl(`${path}/${icon.path}.svg`),
            );
        });
    }
}
