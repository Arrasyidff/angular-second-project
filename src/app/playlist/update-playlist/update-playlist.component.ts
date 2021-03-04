import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PlaylistData } from "../../playlist-data";

@Component({
  selector: 'app-update-playlist',
  templateUrl: './update-playlist.component.html',
  styleUrls: ['./update-playlist.component.css']
})
export class UpdatePlaylistComponent implements OnInit {

  updatePlaylistForm = this.fb.group({
    name: [this.data.payload.data.name, [Validators.required]],
    description: [this.data.payload.data.description, [Validators.required]],
    songs: this.fb.array(this.songForm())
  })

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<UpdatePlaylistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private playlistData: PlaylistData) { }

  ngOnInit() {
    console.log(this.data.payload, "hellooooo update")
  }

  get songs() {
    return this.updatePlaylistForm.controls["songs"] as FormArray
  }

  songForm() {
    let payload = this.data.payload.data.songs
    let result = []
    for (let i = 0; i < payload.length; i++) {
      result.push(
        this.fb.group({
          songTitle: [payload[i].songTitle, [Validators.required]],
          artist: [payload[i].artist, [Validators.required]],
          duration: [payload[i].duration, [Validators.required]]
        })
      )
    }
    return result
  }

  newSongForm() {
    return this.fb.group({
      songTitle: ["", [Validators.required]],
      artist: ["", [Validators.required]],
      duration: ["", [Validators.required]]
    })
  }

  addSong() {
    this.songs.push(this.newSongForm())
  }

  submitUpdate() {
    // console.log(this.updatePlaylistForm.value)
    this.playlistData.updatePlaylist(this.updatePlaylistForm.value, this.data.payload.id)
    console.log(this.playlistData.playlists, "helo Playlist")
    this.updatePlaylistForm.reset()
    this.dialogRef.close()
  }

  deleteSong(i) {
    this.songs.removeAt(i)
  }

  close() {
    this.dialogRef.close()
  }

}
