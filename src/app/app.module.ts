import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { PostDataComponent } from './post-data/post-data.component';
import { HttpClientModule } from '@angular/common/http';
import { PagingComponent } from './paging/paging.component';
import { FooterPostsComponent } from './footer-posts/footer-posts.component';
import { FormsModule } from '@angular/forms';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DividerComponent } from './divider/divider.component';
import { IntroComponent } from './intro/intro.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    RoutingComponents,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostCardComponent,
    SearchWidgetComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    PostDataComponent,
    PagingComponent,
    FooterPostsComponent,
    NewsletterComponent,
    GalleryComponent,
    DividerComponent,
    IntroComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
