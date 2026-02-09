import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-birthday-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="birthday-message">
      <div class="age-display-container">
        <div class="age-display">
          <div class="age-number">20</div>
          <div class="age-label">AÑOS</div>
          <div class="age-decoration">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </div>
        </div>
      </div>
      
      <div class="message-content">
        <div class="message-header">
          <h2 class="surprise-title">¡SORPRESA ESPECIAL!</h2>
          <div class="title-line"></div>
        </div>
        
        <h1 class="main-message">¡Felices 20 años, <span class="highlight">Carlos Mass</span>!</h1>
        
        <div class="wish">
          <p class="wish-line">🎈 Que este día esté lleno de alegría, risas y momentos inolvidables.</p>
          <p class="wish-line">✨ Que cada uno de tus sueños se convierta en realidad.</p>
          <p class="wish-line">🌟 Que este nuevo año de vida te traiga éxitos, salud y felicidad sin límites.</p>
          <p class="wish-line">🎉 ¡Disfruta al máximo tu día especial!</p>
        </div>
        
        <div class="decoration">
          <span class="decoration-icon">🎂</span>
          <span class="decoration-icon">🎉</span>
          <span class="decoration-icon">🥳</span>
          <span class="decoration-icon">🎁</span>
          <span class="decoration-icon">✨</span>
          <span class="decoration-icon">🎈</span>
          <span class="decoration-icon">🌟</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./birthday-message.component.css']
})
export class BirthdayMessageComponent {}