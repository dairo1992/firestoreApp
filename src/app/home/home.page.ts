import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  songList: any = [];

  constructor(private fireService: FirestoreService) {}

  ngOnInit() {
    this.songList = this.fireService.getSongList().valueChanges();
  }

}
