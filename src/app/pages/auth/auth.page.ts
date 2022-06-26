import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm: any;

  constructor(
    private router: Router,
    private alert: AlertController,
    private loading: LoadingController,
    private fireService: FirestoreService,
    private form: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.form.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  async login(event: Event): Promise<void> {
    event.preventDefault();
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.authService.loginUser(email, password).then(() => { this.router.navigateByUrl('home'); }, async error => {
        // const alert = await this.alert.create({ message: error.message, buttons: [{ text: 'OK', role: 'cancel' }] });
        const alert = await this.alert.create({
          message: error.message,
          buttons: [{ text: 'OK', role: 'cancel' }]
        });
        await alert.present();
      });
    }
    return
  }

  get emailField(){
    return this.loginForm.get('email');
  }

  get passField() {
    return this.loginForm.get('password');
  }

}
