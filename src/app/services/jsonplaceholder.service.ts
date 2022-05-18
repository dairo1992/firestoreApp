import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) { }

  getCantantes(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getImages(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
