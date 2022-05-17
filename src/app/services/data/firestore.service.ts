import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Song } from 'src/app/song';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createSong(albumName: string, artistName: string, songDescription: string, songName: string): Promise<void>{
    const id = this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({id,albumName,artistName,songDescription,songName});
  }
}
