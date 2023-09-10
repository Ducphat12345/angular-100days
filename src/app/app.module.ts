import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from 'src/hello/hello.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from 'src/progress-bar/progress-bar.component';
import { AuthorListComponent } from 'src/authors/author-list.component';
import { AuthorDetailComponent } from 'src/authors/author-detail.component';
import { ToggleComponent } from 'src/toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
