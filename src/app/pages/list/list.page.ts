import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  songList: any = [];

  constructor(private fireService: FirestoreService) { }

  ngOnInit() {
    this.songList = this.fireService.getSongList().valueChanges();
    console.log(this.songList);
  }

}
