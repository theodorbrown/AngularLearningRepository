import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: String[] = []

  constructor() { }

  addMessage(m: String){
    this.messages.push(m);
  }

  clear(){
    this.messages = [];
  }
}
