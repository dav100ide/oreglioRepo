import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AVAILABLE_LANGUAGES } from './languages';

@Injectable({
    providedIn: 'root',
})
export class TranslatorService {
    private translateService = inject(TranslateService);
    public initLang(): void {
        const userLang = navigator.language;
        let langCode = userLang.split('-')[0];
        if (!AVAILABLE_LANGUAGES.includes(langCode)) {
            langCode = 'en';
        }
        this.translateService.setDefaultLang(langCode);
        this.translateService.use(langCode);
    }
}
