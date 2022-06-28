import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference, AngularFirestoreCollection, CollectionReference } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConciertoService {
  lista_ref_concierto: any;

  constructor(
    private authService: AuthService,
    private concierto_list_ref: AngularFirestore,
    private router: Router
  ) { }


  async createConcierto(nombre: string, fecha: string, valor_entrada: number, valor_concierto: number): Promise<DocumentReference> {
    const id = this.concierto_list_ref.createId();
    const user: any = await this.authService.getUser();
    this.lista_ref_concierto = this.concierto_list_ref.collection(`perfilUser/${user.uid}/listaConcierto`).doc(`${id}`);
    return this.lista_ref_concierto.set({
      id,
      name: nombre,
      fecha: fecha,
      valor_entrada: valor_entrada,
      valor_concierto: valor_concierto * 1,
      revenue: valor_concierto * -1
    });
  }

  async getConciertoDetalle(id: string) {
    const user: any = await this.authService.getUser();
    this.lista_ref_concierto = this.concierto_list_ref.collection(`perfilUser/${user.uid}/listaConcierto`);
    return this.lista_ref_concierto.doc(id).valueChanges();
  }

  async getConciertoLista() {
    const user: any = await this.authService.getUser();
    if (user.uid) {
      this.lista_ref_concierto = this.concierto_list_ref.collection(`perfilUser/${user.uid}/listaConcierto`);
      return this.lista_ref_concierto.valueChanges();
    }
    this.router.navigateByUrl('home')
  }

  async addGuest(nombreInvitado: string, idEvento: string, precioEvento: number) {
    const user: any = await this.authService.getUser();
    return this.lista_ref_concierto = this.concierto_list_ref.collection(`perfilUser/${user.uid}/listaConcierto`).add({nombreInvitado}).then((nuevoInvitado) => {
      // return this.lista_ref_concierto.firestore().runTransaction(transaction => {
      return this.lista_ref_concierto.runTransaction(transaction => {
      // return firebase.firestore().runTransaction(transaction => {
        return transaction.get(this.lista_ref_concierto.doc(idEvento)).then(eventDoc => {
          const nuevoIngreso = eventDoc.data().revenue + precioEvento;
          transaction.update(this.lista_ref_concierto.doc(idEvento), { revenue: nuevoIngreso });
        });
      });
    });
  }
}