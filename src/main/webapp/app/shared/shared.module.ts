import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TutoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TutoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TutoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutoSharedModule {
  static forRoot() {
    return {
      ngModule: TutoSharedModule
    };
  }
}
