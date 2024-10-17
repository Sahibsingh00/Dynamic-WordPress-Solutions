import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeServiceComponent } from './home-service/home-service.component';



@NgModule({
  declarations: [
    HomeBannerComponent,
    HomeServiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HomeBannerComponent,
    HomeServiceComponent
  ]
})
export class SharedModule { }
