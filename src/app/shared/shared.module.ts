import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from './material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslationModule } from '../translation/translation.module';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    TranslationModule
  ],
  exports: [CommonModule, MaterialModule, TranslateModule, TranslationModule],
  declarations: [],
  providers: []
})
export class SharedModule { }
