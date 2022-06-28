import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConciertoService } from 'src/app/services/concierto.service';

@Component({
  selector: 'app-concierto-list',
  templateUrl: './concierto-list.page.html',
  styleUrls: ['./concierto-list.page.scss'],
})
export class ConciertoListPage implements OnInit {
  listaConciertos = [];
  constructor(private conciertoService: ConciertoService, router: Router) { }

  ngOnInit() {
    this.conciertoService.getConciertoLista().then(ObservableCollection => {
      const subscription = ObservableCollection.subscribe(conciertos => {
        this.listaConciertos = conciertos;
      }, (err) => {
        console.error(err);
      });
    });
  }



}
