import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root.component';
import {NavModule} from '../nav/nav.module';
import {DashModule} from '../dash/dash.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    NavModule,
    DashModule,
  ], exports: [RootComponent]

})
export class RootModule {
}
