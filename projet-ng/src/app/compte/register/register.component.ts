import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string = '';

  constructor(private fb: FormBuilder, private ls: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.ls.checkIfConnected()) {
      this.router.navigate(['/']);
    }
  }

  form = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['',Validators.required],
    pass: ['',Validators.required],
    type: ['',Validators.required],
    email: ['',Validators.required],
    ville: ['',Validators.required],
    cp: ['',Validators.required],
    adresse: ['',Validators.required],
    n: ['',Validators.required],
    tel: ['',Validators.required],
  });

  onSubmit(): void{
    const email = this.form.get('email')?.value;

    //save si email existe pas sinon on save pas
    if (!(this.emailExists(email))){
      this.ls.saveUser(this.form.getRawValue());
      this.message = 'Utilisateur enregistré';
      this.form.reset();
    } else {
      this.message = 'Utilisateur  déjà enregistré avec cet email';
    }
  }

  emailExists(email: string): boolean{
    //tableau du localstorage
    const users = this.ls.getUsers();
    //recherche dans le localstorage de cet email
    const result = users.users.find((e: { email: string; }) => e.email == email);

    if (result) {
      return true;
    } else {
      return false;
    }
  }
}
