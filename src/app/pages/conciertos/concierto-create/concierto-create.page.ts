import { Component, OnInit } from '@angular/core';
import { ConciertoService } from 'src/app/services/concierto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concierto-create',
  templateUrl: './concierto-create.page.html',
  styleUrls: ['./concierto-create.page.scss'],
})
export class ConciertoCreatePage implements OnInit {
  minDate: Date;
  nombre: any; fecha: any; valor_entrada: any; valor_concierto: any;
  constructor(private conciertoService: ConciertoService, private router: Router) {
    this.minDate = new Date();
   }

  ngOnInit() { }

  createConcierto(nombre: string, fecha: string, valor_entrada: number, valor_concierto: number): void {
    if (nombre == undefined || fecha == undefined || valor_entrada == undefined || valor_concierto == undefined) {
      return;
    }
    this.conciertoService.createConcierto(nombre, fecha, valor_entrada, valor_concierto).then(() => {
      this.router.navigateByUrl('home');
    })
  }

  test(){
    console.log(this.nombre)
  }

}
