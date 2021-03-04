import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AddPlaylistComponent } from "./playlist/add-playlist/add-playlist.component";
import { UpdatePlaylistComponent } from "./playlist/update-playlist/update-playlist.component";
import { PlaylistData } from "./playlist-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Challenge2';
  dataPlaylist = []

  constructor(public dialog: MatDialog, private playlistData: PlaylistData) {
  }

  ngOnInit() {
    // console.log(this.data, "halo data")
    this.dataPlaylist = this.playlistData.playlists
    // console.log(this.playlistData.playlists)
  }

  addPlaylist() {
    this.dialog.open(AddPlaylistComponent, { data: { name: 'fadel' } })
  }

  countDurations(songs) {
    let result = 0
    for (let i = 0; i < songs.length; i++) {
      result += songs[i].duration
    }
    return result
  }

  removePlaylist(data: any) {
    this.playlistData.deletePlaylist(data)
    this.dataPlaylist = this.playlistData.playlists
  }

  openUpdate(data: any, id: number) {
    let payload = {
      data,
      id
    }

    let dialogRef = this.dialog.open(UpdatePlaylistComponent, {data: {payload}})

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result, "hello form parent")
      this.dataPlaylist = this.playlistData.playlists
    })
  }
}
