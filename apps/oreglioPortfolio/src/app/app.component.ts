import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatorService } from '../features/translator/translator.service';
import { HeaderComponent } from './src/components/header/header.component';
import { TranslatorModule } from '../features/translator/translator.module';
import { FooterComponent } from './src/components/footer/footer.component';
import { IconsService } from '@dav100ide/utility';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, TranslatorModule, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [IconsService],
})
export class AppComponent {
    title = `oreglioPortfolio`;
    constructor(
        private translatorService: TranslatorService,
        private iconsService: IconsService,
    ) {
        // this.translateService.get('pills').subscribe((res) => {
        //     this.pills = res;
        // });
        this.translatorService.initLang();
        this.iconsService.registerSvgIcons();
    }
}
