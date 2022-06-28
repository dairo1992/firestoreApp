import { Component, OnInit } from '@angular/core';
import { ConciertoService } from 'src/app/services/concierto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-concierto-detail',
  templateUrl: './concierto-detail.page.html',
  styleUrls: ['./concierto-detail.page.scss'],
})
export class ConciertoDetailPage implements OnInit {
  concierto: any = [];
  nombre_invitado: string = '';
  constructor(private conciertoService: ConciertoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idConcierto: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.conciertoService.getConciertoDetalle(idConcierto).then(obsevable => {
      obsevable.subscribe(concierto => {
        this.concierto = concierto;
      });
    });
  }

  agregar_invitado(nombre_invitado: string): void {
    this.conciertoService.addGuest(nombre_invitado, this.concierto.id, this.concierto.valor_entrada).then(() =>
      this.nombre_invitado = '');
  }

}
