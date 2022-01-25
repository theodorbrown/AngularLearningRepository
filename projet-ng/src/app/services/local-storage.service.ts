import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  public getUsers(): any {
    //va chercher les users
    const users = window.localStorage.getItem('users');
    if (users) {
      return JSON.parse(users);
    }
    //si y'a pas
    return {
      "users" : []
    };
  }

  public saveUser(user: any){
    //va chercher les users
    const users = this.getUsers();
    users.users.push(user);
    
    //MAJ des users du localStorage
    window.localStorage.setItem('users',JSON.stringify(users));
  }

  public connectUser(user: any){
    window.localStorage.setItem('userConnected',JSON.stringify(user));
  }

  public logOutUser(){
    window.localStorage.removeItem('userConnected');
  }

  public checkIfConnected(){
    if (localStorage.getItem("userConnected")) {
      return true;
    } else {
      return false;
    }
  }

  public getUser(){
    if (localStorage.getItem("userConnected")) {
      const user = JSON.parse(localStorage.getItem("userConnected")!);
      return user;
    } else {
      return {}
    }
  }
}