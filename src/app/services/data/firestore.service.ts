import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Image } from 'src/app/interfaces/image';
import { RecordingStudios } from 'src/app/interfaces/recording-studios';
import { Song } from 'src/app/interfaces/song';

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

  getImages(){
    return this.firestore.collection('images');
  }

  getSongDetails(path: string, songId: string) {
    const value = this.firestore.collection(path);
    return value.doc(songId).valueChanges();
  }

  deleteSong(songId: string): Promise<void> {
    return this.firestore.doc(`songList/${songId}`).delete();
  }

  updateSong(id: string, albumName: string, artistName: string, songDescription: string, songName: string): Promise<void>{
    return this.firestore.doc(`songList/${id}`).update({id, albumName, artistName, songDescription, songName});
  }

  createRecording(nameRedording: string, typeOFMelody: string, numberOfCabins: string, owner: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`recordingList/${id}`).set({id, nameRedording, typeOFMelody, numberOfCabins, owner});
  }

  getRecordingList(): AngularFirestoreCollection<RecordingStudios> {
    return this.firestore.collection('recordingList');
  }

  getRecordingDetails(path: string, recordingId: string) {
    const value = this.firestore.collection(path);
    return value.doc(recordingId).valueChanges();
  }

  deleteRecording(recordingId: string): Promise<void> {
    return this.firestore.doc(`recordingList/${recordingId}`).delete();
  }

  updateRecording(id: string, nameRedording: string, typeOFMelody: string, numberOfCabins: string, owner: string): Promise<void>{
    return this.firestore.doc(`recordingList/${id}`).update({id, nameRedording, typeOFMelody, numberOfCabins, owner});
  }

  images(images: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`images/${id}`).set({images});
  }


}


