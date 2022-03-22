import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { LayoutComponent } from './components/layout/Layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './views/home/home.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { playlistReducer } from './reducers/playlist.reducer';


@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    HomeComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    SwiperModule,
    HttpClientModule,
    StoreModule.forRoot({ playlist: playlistReducer }),
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
