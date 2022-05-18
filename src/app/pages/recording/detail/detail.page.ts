import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecordingStudios } from 'src/app/interfaces/recording-studios';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  recordingId: any;
  recording: any = {};

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private firestoreService: FirestoreService,
    private alert: AlertController
  ) { }

  ngOnInit() {
    this.recordingId = this.activeRoute.snapshot.paramMap.get('id');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const des_suscribe = this.firestoreService.getSongDetails('recordingList', this.recordingId).subscribe(results => {
      this.recording = results;
      des_suscribe.unsubscribe();
    });
  }

  async deleteRecording(){
    const alert = await this.alert.create({
      message: 'Estas seguro que quieres eliminar la grabación', buttons: [
        {
          text: 'Cancel', role: 'cancel', handler: blah => {

            console.log('Comfirm Cancel:  blah');
          },
        },
        {
          text: 'Okay', handler: () => {
            this.firestoreService.deleteRecording(this.recordingId).then(() => {
              this.router.navigateByUrl('');
            });

          },
        },],
    });
    await alert.present();
  }

  updateRecording(recording: RecordingStudios){
    const extras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(recording)
      }
    };
    this.router.navigate(['update-recording/'], extras);
  }

}
