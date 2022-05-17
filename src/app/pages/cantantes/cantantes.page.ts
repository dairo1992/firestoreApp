import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-cantantes',
  templateUrl: './cantantes.page.html',
  styleUrls: ['./cantantes.page.scss'],
})
export class CantantesPage implements OnInit {
  cantantes: any = [];

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private JS: JsonplaceholderService) { }

  ngOnInit() {
    this.JS.getCantantes().subscribe(result => {
      this.cantantes = result;
      console.log(result[0]);
    });
  }

}
