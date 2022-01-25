import { Router } from '@angular/router';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string = "";

  constructor(private fb: FormBuilder, private ls: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.ls.checkIfConnected()) {
      this.router.navigate(['/']);
    }
  }

  form = this.fb.group({
    email: ['', Validators.required],
    pass: ['',Validators.required],
  });

  onSubmit(): void{
    const email = this.form.get('email')?.value;
    const pass = this.form.get('pass')?.value;
    
    //user ok et co
    if (this.verifyUser(email,pass)){
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
}

  verifyUser(email: string, pass: string): boolean{
    //tableau du localstorage
    const users = this.ls.getUsers();
    //recherche dans le localstorage de cet email et pass
    const result = users.users.find((e: any) => e.email == email && e.pass == pass);

    //user exist bon mail et bon pass
    if (result) {
      this.ls.connectUser(result);
      return true;
    //existe pas (mauvais mail ou mdp)
    } else {
      this.message = "Email ou mot de passe invalide."
      return false;
    }
  }
}
