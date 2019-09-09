import { NgModule } from '@angular/core';

import { TutoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TutoSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TutoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TutoSharedCommonModule {}
