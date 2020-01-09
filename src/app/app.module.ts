import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth-guard';
import { AuthService } from './shared/services/auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { PromoComponent } from './components/promo/promo.component';
import { ContentComponent } from './components/content/content.component';
import { ApplyModule } from './components/apply-detail/apply.module';
import { ApplyChildComponent } from './components/apply-child/apply-child.component';
import { CurrencyMaskDirective } from './shared/directive/currency-mask.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopbarComponent,
    PromoComponent,
    ContentComponent,
    ApplyChildComponent,
    CurrencyMaskDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ApplyModule,
  ],
  exports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ApplyModule,
    CurrencyMaskDirective
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
