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
  createRecordingForm: any;

  constructor(private router: Router,
    private alert: AlertController,
    private loading: LoadingController,
    private fireService: FirestoreService,
    private form: FormBuilder) {
    this.createRecordingForm = this.form.group({
      nameRedording: ['', Validators.required],
      typeOFMelody: ['', Validators.required],
      numberOfCabins: ['', Validators.required],
      owner: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async createRecording() {
    const loading = await this.loading.create();
    const nameRedording = this.createRecordingForm.value.nameRedording;
    const typeOFMelody = this.createRecordingForm.value.typeOFMelody;
    const numberOfCabins = this.createRecordingForm.value.numberOfCabins;
    const owner = this.createRecordingForm.value.owner;

    this.fireService.createRecording(nameRedording, typeOFMelody, numberOfCabins, owner).then(
      () => { loading.dismiss().then(() => { this.router.navigateByUrl('home'); }); },
      error => {
        console.error(error);
      }
    );
    return await loading.present();
  }

}

