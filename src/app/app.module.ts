import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatIconModule, MatButtonModule } from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPlaylistComponent } from './playlist/add-playlist/add-playlist.component';
import { PlaylistData } from "./playlist-data";
import { UpdatePlaylistComponent } from './playlist/update-playlist/update-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlaylistComponent,
    UpdatePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [PlaylistData],
  bootstrap: [AppComponent],
  entryComponents: [AddPlaylistComponent, UpdatePlaylistComponent]
})
export class AppModule { }
