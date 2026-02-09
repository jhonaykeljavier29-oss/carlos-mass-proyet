import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declaración simple para evitar errores
declare const confetti: any;

@Component({
  selector: 'app-confetti-explosion',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #confettiCanvas class="confetti-canvas"></canvas>`,
  styleUrls: ['./confetti-explosion.component.css']
})
export class ConfettiExplosionComponent implements OnInit {
  @Output() confettiComplete = new EventEmitter<void>();

  ngOnInit() {
    // Pequeño delay para asegurar que el componente esté renderizado
    setTimeout(() => {
      this.launchConfetti();
    }, 100);
  }

  launchConfetti() {
    try {
      // Intenta cargar confetti de diferentes maneras
      if (typeof confetti !== 'undefined') {
        this.fireConfetti();
      } else {
        console.log('Confetti no disponible, continuando sin él...');
        this.confettiComplete.emit();
      }
    } catch (error) {
      console.log('Error con confetti, pero la celebración continúa!');
      this.confettiComplete.emit();
    }
  }

  fireConfetti() {
    const duration = 3 * 1000; // 3 segundos
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
    
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeout(() => {
          this.confettiComplete.emit();
        }, 500);
        return;
      }
      
      const particleCount = 50 * (timeLeft / duration);
      
      // Confetti desde izquierda
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.2, y: 0.6 }
      });
      
      // Confetti desde derecha
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.8, y: 0.6 }
      });
    }, 250);
    
    // Explosión inicial
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 100);
  }
}