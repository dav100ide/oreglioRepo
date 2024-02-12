import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providers } from './app.providers';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), importProvidersFrom(providers)],
};
