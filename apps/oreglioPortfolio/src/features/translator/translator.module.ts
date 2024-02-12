import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatorService } from './translator.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule, TranslateModule],
    providers: [TranslatorService],
    exports: [TranslateModule],
})
export class TranslatorModule {}
