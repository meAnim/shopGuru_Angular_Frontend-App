import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainMenubarComponent } from './main-menubar/main-menubar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterBlockComponent } from './footer-block/footer-block.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, MainMenubarComponent, HomePageComponent, FooterBlockComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
