import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { FaqComponent } from './faq/faq.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { PricingComponent } from './pricing/pricing.component';
import { ReviewComponent } from './review/review.component';
import { TrialComponent } from './trial/trial.component';
import { WordPressEmergencyServicesComponent } from './services/word-press-emergency-services/word-press-emergency-services.component';
import { WordPressMalwareRemovalComponent } from './services/word-press-malware-removal/word-press-malware-removal.component';
import { WordPressDemandSupportComponent } from './services/word-press-demand-support/word-press-demand-support.component';
import { WordPressDevelopmentComponent } from './services/word-press-development/word-press-development.component';
import { WordPressMigrationServicesComponent } from './services/word-press-migration-services/word-press-migration-services.component';
import { WordPressMaintenanceComponent } from './services/word-press-maintenance/word-press-maintenance.component';
import { WooCommerceMaintenanceComponent } from './services/woo-commerce-maintenance/woo-commerce-maintenance.component';
import { WordPressRetainerComponent } from './services/word-press-retainer/word-press-retainer.component';
import { WordPressSecurityServicesComponent } from './services/word-press-security-services/word-press-security-services.component';
import { WordPressSEOServicesComponent } from './services/word-press-seo-services/word-press-seo-services.component';
import { WordPressSpeedOptimizationComponent } from './services/word-press-speed-optimization/word-press-speed-optimization.component';


@NgModule({
  declarations: [
    AboutComponent,
    BlogComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    FaqComponent,
    HomeComponent,
    HowItWorkComponent,
    PricingComponent,
    ReviewComponent,
    TrialComponent,
    WordPressEmergencyServicesComponent,
    WordPressMalwareRemovalComponent,
    WordPressDemandSupportComponent,
    WordPressDevelopmentComponent,
    WordPressMigrationServicesComponent,
    WordPressMaintenanceComponent,
    WooCommerceMaintenanceComponent,
    WordPressRetainerComponent,
    WordPressSecurityServicesComponent,
    WordPressSEOServicesComponent,
    WordPressSpeedOptimizationComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
