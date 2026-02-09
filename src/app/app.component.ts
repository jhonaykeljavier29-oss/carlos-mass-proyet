import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfettiExplosionComponent } from './confetti-explosion/confetti-explosion.component';
import { BirthdayMessageComponent } from './birthday-message/birthday-message.component';
import { PersonalDedicationComponent } from './personal-dedication/personal-dedication.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ConfettiExplosionComponent,
    BirthdayMessageComponent,
    PersonalDedicationComponent  // Solo estos 3 componentes
  ],
  template: `
    <div class="app-container">
      <app-confetti-explosion *ngIf="showConfetti" (confettiComplete)="onConfettiComplete()"></app-confetti-explosion>
      
      <main *ngIf="showContent">
        <header class="header">
          <h1 class="title">🎉 ¡Celebración Especial! 🎉</h1>
          <p class="subtitle">Algo increíble está por suceder...</p>
        </header>
        
        <section class="main-content">
          <app-birthday-message class="message-section"></app-birthday-message>
          
          <!-- Área de Mensaje Especial -->
          <div class="special-message-section">
            <h2>💌 Mensaje Especial para Carlos</h2>
            <p>En este día tan especial, queremos desearte lo mejor en tus 20 años.</p>
            <p>Que cada momento esté lleno de alegría y que todos tus sueños se hagan realidad.</p>
            <p>¡Feliz Cumpleaños!</p>
          </div>
          
          <app-personal-dedication class="dedication-section"></app-personal-dedication>
        </section>
        
        <footer class="footer">
          <div class="credits">
            Hecho con ❤️ por Jhonaykel
          </div>
          <div class="secret-note">
            Proyecto: Carlos Mass Proyet - ¡Manteniendo el secreto!
          </div>
        </footer>
      </main>
      
      <div *ngIf="!showContent" class="access-screen">
        <div class="access-container">
          <h2>Acceso Exclusivo</h2>
          <p>Esta es una experiencia especial de cumpleaños</p>
          <button class="access-button" (click)="grantAccess()">
            🎂 Ingresar a la Celebración 🎂
          </button>
          <p class="hint">¡Prepárate para la sorpresa!</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showConfetti = false;
  showContent = false;

  ngOnInit() {
    // Inicialmente no mostramos contenido hasta que el usuario acceda
  }

  grantAccess() {
    this.showConfetti = true;
  }

  onConfettiComplete() {
    this.showContent = true;
    this.showConfetti = false;
  }
}