import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';
import { SwiperModule } from 'swiper/angular';
import { BannerComponent } from './core/components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrowseComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MovieCarouselComponent,
    SwiperModule,
    BannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
