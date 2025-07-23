import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimatedLogo } from './components/animated-logo/animated-logo';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [AnimatedLogo, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portafolio');
}