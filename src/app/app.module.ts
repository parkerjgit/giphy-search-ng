import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
} from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { GalleryComponent } from './components/gallery/gallery.component';

// ngRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store';
import { GifsEffects } from './store/gifs/gifs.effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SidebarContentComponent } from './components/sidebar-content/sidebar-content.component';
import { KeywordFilterComponent } from './components/keyword-filter/keyword-filter.component';
import { SortControlsComponent } from './components/sort-controls/sort-controls.component';
import { RatingsFilterComponent } from './components/ratings-filter/ratings-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    GalleryComponent,
    SearchbarComponent,
    SidebarContentComponent,
    KeywordFilterComponent,
    SortControlsComponent,
    RatingsFilterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    // Material
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,

    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([GifsEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
