import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Song } from 'src/app/song';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createSong(albumName: string, artistName: string, songDescription: string, songName: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({ id, albumName, artistName, songDescription, songName });
  }

  getSongList(): AngularFirestoreCollection<Song> {
    return this.firestore.collection('songList');
  }

  getSongDetails(path: string, songId: string) {
    const value = this.firestore.collection(path);
    return value.doc(songId).valueChanges();
  }

  deleteSong(songId: string): Promise<void> {
    return this.firestore.doc(`songList/${songId}`).delete();
  }
}
