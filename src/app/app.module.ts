import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './pages/home-app/home-app.component';
import { CardSmallComponent } from './components/card-small/card-small.component';
import { HttpClientModule } from '@angular/common/http';
import { CardTextComponent } from './components/card-text/card-text.component';
import { TopoAppComponent } from './components/topo-app/topo-app.component';
import { FooterAppComponent } from './components/footer-app/footer-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    CardSmallComponent,
    CardTextComponent,
    TopoAppComponent,
    FooterAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
