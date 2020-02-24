import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import {NgbAccordionModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { PortfolioItemComponent } from './dialogs/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    BannerComponent,
    ResumeComponent,
    PortfolioComponent,
    CallToActionComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    NgbAccordionModule
  ],
  entryComponents: [PortfolioItemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
