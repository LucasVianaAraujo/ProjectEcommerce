import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  email = '';
  senha = '';

  enviar() {
    if (this.email == 'admin@gmail.com' && this.senha == '1234') {
      alert('Credenciais Corretas!')
    } else {
      alert('Credenciais inválidas!');
    }
  }
}