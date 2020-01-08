import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopbarComponent,
    PromoComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
