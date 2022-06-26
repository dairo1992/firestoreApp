import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from '@firebase/util';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: any;
  constructor(
    private router: Router,
    private alert: AlertController,
    private loading: LoadingController,
    private form: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit() {
  }
  get emailField(){
    return this.registerForm.get('email');
  }

  get passField() {
    return this.registerForm.get('password');
  }

  async register(event: Event): Promise<void>{
    event.preventDefault();
    if(this.registerForm.valid){
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      this.authService.signUp(email, password).then(() => {this.router.navigateByUrl('auth')}, async error => {
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
}
