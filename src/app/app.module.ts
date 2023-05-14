import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import{HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KonstelacjaComponent } from './konstelacja/konstelacja.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MyskyComponent } from './mysky/mysky.component';
import { PostService } from './posts.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StarsComponent } from './stars/stars.component';
import { StarsService } from './stars.service';
@NgModule({
  declarations: [
    AppComponent,
    KonstelacjaComponent,
    HeaderComponent,
    MyskyComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatProgressSpinnerModule
    
  ],
  providers: [PostService, StarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
