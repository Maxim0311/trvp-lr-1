import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
