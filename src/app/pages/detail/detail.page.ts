import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  song: any = {};
  songId: any;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private firestoreService: FirestoreService,
    private alert: AlertController) { }

  ngOnInit() {
    this.songId = this.activeRoute.snapshot.paramMap.get('id');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const des_suscribe = this.firestoreService.getSongDetails('songList', this.songId).subscribe(results => {
      this.song = results;
      des_suscribe.unsubscribe();
    });
  }

  // async deleteSong() {
  //   console.log(111);
  //   const alert = await this.alert.create({
  //     message: 'Estas seguro que quieres eliminar la canción', buttons: [
  //       {
  //         text: 'Cancelar', role: 'cancel', handler: blah => {
  //           console.log('confirma cancel: blah');
  //         }
  //       },
  //       {
  //         text: 'OK', handler: () => {
  //           this.firestoreService.deleteSong(this.songId).then(
  //             () => {
  //               this.router.navigateByUrl('');
  //             });
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  async deleteSong() {
    const alert = await this.alert.create({
      message: 'Estas seguro que quieres eliminar la canción', buttons: [
        {
          text: 'Cancel', role: 'cancel', handler: blah => {

            console.log('Comfirm Cancel:  blah');
          },
        },
        {
          text: 'Okay', handler: () => {
            this.firestoreService.deleteSong(this.songId).then(() => {
              this.router.navigateByUrl('');
            });

          },
        },],
    });
    await alert.present();
  }

  updateSong(song) {
    const extras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(song)
      }
    };
    this.router.navigate(['update-song/'], extras);
  }

}
