import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  songList: any = [];
  statusUser: any;

  constructor(private fireService: FirestoreService, private authService: AuthService) {
    this.authService.hasUser().subscribe(estado => {
      if(estado != null) {
        this.statusUser = estado.email != null ? 0 : 1;
      }
      this.statusUser = 1;
    });
  }

  ngOnInit() {
    this.songList = this.fireService.getSongList().valueChanges();

  }

  salir(){
    this.authService.logout();
  }
}
