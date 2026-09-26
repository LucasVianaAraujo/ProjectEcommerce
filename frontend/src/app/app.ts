import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';

@Component({
  imports: [RouterOutlet, Header, Footer, Login, Home],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('OldShoes');
}