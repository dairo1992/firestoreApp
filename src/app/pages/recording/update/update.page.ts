import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  updateRecordingForm: any;
  recording: any;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private firestoreService: FirestoreService,
    private alert: AlertController,
    private form: FormBuilder,
    private loading: LoadingController
  ) {
    this.activeRoute.queryParams.subscribe(params => {
      this.recording = JSON.parse(params.data);
    });
  }

  ngOnInit() {
    this.updateRecordingForm = this.form.group({
      nameRedording: [this.recording.nameRedording, Validators.required],
      typeOFMelody: [this.recording.typeOFMelody, Validators.required],
      numberOfCabins: [this.recording.numberOfCabins, Validators.required],
      owner: [this.recording.owner, Validators.required]
    });
  }
  async updateRecording() {
    const loading = await this.loading.create();
    const recordingId = this.recording.id;
    const nameRedording = this.updateRecordingForm.value.nameRedording;
    const typeOFMelody = this.updateRecordingForm.value.typeOFMelody;
    const numberOfCabins = this.updateRecordingForm.value.numberOfCabins;
    const owner = this.updateRecordingForm.value.owner;

    this.firestoreService.updateRecording(recordingId, nameRedording, typeOFMelody, numberOfCabins, owner).then(
      () => { loading.dismiss().then(() => { this.router.navigateByUrl('home'); }); },
      error => {
        console.error(error);
      }
    );
    return await loading.present();
  }

}
