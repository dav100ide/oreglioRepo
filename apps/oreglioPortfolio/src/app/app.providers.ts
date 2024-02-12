import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImportProvidersSource } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../features/translator/http-loader-factory.function';

export const providers: ImportProvidersSource[] = [
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
        },
    }),
];
