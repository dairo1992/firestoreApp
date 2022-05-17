import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  createSongForm: any;

  constructor(
    private router: Router,
    private alert: AlertController,
    private loading: LoadingController,
    private fireService: FirestoreService,
    private form: FormBuilder
  ) {
    this.createSongForm = this.form.group({
      albumName: ['', Validators.required],
      artistName: ['', Validators.required],
      songDescription: ['', Validators.required],
      songName: ['', Validators.required],
    })
   }

  ngOnInit() {
  }

  async createSong(){
    const loading = await this.loading.create();
    const albumName = this.createSongForm.value.albumName;
    const artistName = this.createSongForm.value.artistName;
    const songDescription = this.createSongForm.value.songDescription;
    const songName = this.createSongForm.value.songName;

    this.fireService.createSong(albumName, artistName, songDescription, songName).then(
      () => {loading.dismiss().then(() => {this.router.navigateByUrl('home');});},
      error => {
        console.error(error);
      }
    )
    return await loading.present();
  }
}
