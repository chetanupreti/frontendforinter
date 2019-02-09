import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageService } from "./image/shared/image.service";
import { ImageFilterPipe } from "./image/shared/filter.pipe";
import { ImageComponent } from "./image/image.component";
import { ImageDetailComponent } from "./image/image-detail.component";
import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { RatingModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,ImageComponent,ImageDetailComponent
    
  ],
  imports: [
    BrowserModule,RatingModule.forRoot(),
    AppRoutingModule,AlertModule.forRoot(),RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
