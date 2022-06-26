import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  recoveryForm: any;
  constructor(
    private router: Router,
    private alert: AlertController,

    private fireService: FirestoreService,
    private form: FormBuilder,
    private authService: AuthService
  ) {
    this.recoveryForm = this.form.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async recovery(event: Event): Promise<void> {
    event.preventDefault();
    if (this.recoveryForm.valid) {
      const email = this.recoveryForm.value.email;
      this.authService.resetPassword(email).then(async () => {

        const alert = await this.alert.create({
          header: 'Confirm!',
          message: 'Se ha enviado un enlace a su correo para restablecer la contraseña',
          buttons: [
            {
              text: 'Ok',
              id: 'confirm-button',
              handler: () => {
                this.router.navigateByUrl('/auth');
              }
            }
          ]
        });

        await alert.present();


      }, async error => {
        // const alert = await this.alert.create({ message: error.message, buttons: [{ text: 'OK', role: 'cancel' }] });
        const alert = await this.alert.create({
          message: error.message,
          buttons: [{ text: 'OK', role: 'cancel' }]
        });
        await alert.present();
      });
    }
    return;
  }

  get emailField() {
    return this.recoveryForm.get('email');
  }


}
