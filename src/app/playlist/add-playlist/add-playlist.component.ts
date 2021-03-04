import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { FormBuilder, FormArray, Validators, FormControl } from "@angular/forms";
import { PlaylistData } from "../../playlist-data";

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {

  addPlaylistForm = this.fb.group({
    name: ["", [Validators.required]],
    description: ["", [Validators.required]],
    songs: this.fb.array([this.songForm()])
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddPlaylistComponent>,
    private fb: FormBuilder,
    private playlistData: PlaylistData) { }

  ngOnInit() {
    // console.log(this.playlistData.playlists)
  }

  get songs() {
    return this.addPlaylistForm.controls["songs"] as FormArray
  }

  songForm() {
    return this.fb.group({
      songTitle: ["", [Validators.required]],
      artist: ["", [Validators.required]],
      duration: ["", [Validators.required]]
    })
  }

  addSong() {
    this.songs.push(this.songForm())
  }

  deleteSong(i) {
    this.songs.removeAt(i)
  }

  close() {
    this.dialogRef.close()
  }

  submitPlaylist() {
    this.playlistData.addPlaylist(this.addPlaylistForm.value)
    // console.log(this.playlistData.playlists)
    this.addPlaylistForm.reset()
    this.dialogRef.close()
  }

}
