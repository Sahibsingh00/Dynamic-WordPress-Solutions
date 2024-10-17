import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { PricingComponent } from './pricing/pricing.component';
import { ReviewComponent } from './review/review.component';
import { ServicesComponent } from './services/services.component';
import { WordPressDevelopmentComponent } from './services/word-press-development/word-press-development.component';
import { WordPressEmergencyServicesComponent } from './services/word-press-emergency-services/word-press-emergency-services.component';
import { WordPressMalwareRemovalComponent } from './services/word-press-malware-removal/word-press-malware-removal.component';
import { WordPressDemandSupportComponent } from './services/word-press-demand-support/word-press-demand-support.component';
import { WordPressMigrationServicesComponent } from './services/word-press-migration-services/word-press-migration-services.component';
import { WordPressMaintenanceComponent } from './services/word-press-maintenance/word-press-maintenance.component';
import { WooCommerceMaintenanceComponent } from './services/woo-commerce-maintenance/woo-commerce-maintenance.component';
import { WordPressRetainerComponent } from './services/word-press-retainer/word-press-retainer.component';
import { WordPressSecurityServicesComponent } from './services/word-press-security-services/word-press-security-services.component';
import { WordPressSpeedOptimizationComponent } from './services/word-press-speed-optimization/word-press-speed-optimization.component';
import { WordPressSEOServicesComponent } from './services/word-press-seo-services/word-press-seo-services.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'home', component: HomeComponent },
      {path : 'cart', component : CartComponent},
      {path : 'checkout', component : CheckoutComponent},
      {path : 'how-it-work', component : HowItWorkComponent},
      {path : 'pricing', component : PricingComponent},
      {path : 'review', component : ReviewComponent},
      {path : 'faq', component : FaqComponent},
      {path : 'services', component : ServicesComponent},
      {path : 'services/custom-wordpress-development', component : WordPressDevelopmentComponent},
      {path : 'services/wordpress-emergency-services', component : WordPressEmergencyServicesComponent},
      {path : 'services/wordpress-malware-removal', component : WordPressMalwareRemovalComponent},
      {path : 'services/wordpress-on-demand-support', component : WordPressDemandSupportComponent},
      {path : 'services/wordpress-migration-services', component : WordPressMigrationServicesComponent},
      {path : 'services/wordpress-maintenance', component : WordPressMaintenanceComponent},
      {path : 'services/woocommerce-maintenance', component : WooCommerceMaintenanceComponent},
      {path : 'services/wordpress-retainer', component : WordPressRetainerComponent},
      {path : 'services/wordPress-security-services', component : WordPressSecurityServicesComponent},
      {path : 'services/wordPress-seo-services', component : WordPressSEOServicesComponent},
      {path : 'services/wordPress-speed-optimization', component : WordPressSpeedOptimizationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }