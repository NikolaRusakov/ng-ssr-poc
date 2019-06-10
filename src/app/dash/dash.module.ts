import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashComponent} from './dash.component';
import {MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ], exports: [DashComponent]
})
export class DashModule {
}
