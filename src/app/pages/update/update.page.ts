import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Song } from 'src/app/song';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  updateSongForm: any;
  song: Song;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private firestoreService: FirestoreService,
    private alert: AlertController,
    private form: FormBuilder,
    private loading: LoadingController) {
    this.activeRoute.queryParams.subscribe(params => {
      this.song = JSON.parse(params.data);
    });


  }

  ngOnInit() {
    this.updateSongForm = this.form.group({
      albumName: [this.song.albumName, Validators.required],
      artistName: [this.song.artistName, Validators.required],
      songDescription: [this.song.songDescription, Validators.required],
      songName: [this.song.songName, Validators.required],
    });
  }

  async updateSong() {
    const loading = await this.loading.create();
    const songId = this.song.id;
    const albumName = this.updateSongForm.value.albumName;
    const artistName = this.updateSongForm.value.artistName;
    const songDescription = this.updateSongForm.value.songDescription;
    const songName = this.updateSongForm.value.songName;

    this.firestoreService.updateSong(songId, albumName, artistName, songDescription, songName).then(
      () => { loading.dismiss().then(() => { this.router.navigateByUrl('home'); }); },
      error => {
        console.error(error);
      }
    );
    return await loading.present();
  }

}
