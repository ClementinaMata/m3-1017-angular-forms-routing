import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {routes} from './routes';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FrasesListComponent } from './frases-list/frases-list.component';
import { QuoteComponent } from './quote/quote.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FrasesListComponent,
    QuoteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
