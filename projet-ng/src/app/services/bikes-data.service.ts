import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://my-json-server.typicode.com/theodorbrown/FakeApiBikes/';

@Injectable({
  providedIn: 'root'
})
export class BikesDataService {

  constructor(private http: HttpClient) { }

  getListBikes(){
    return this.http.get(url + 'velos');
  }
}