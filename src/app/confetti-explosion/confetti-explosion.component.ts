import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar canvas-confetti de manera segura
declare const require: any;

@Component({
  selector: 'app-confetti-explosion',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="confetti-container"></div>`,
  styleUrls: ['./confetti-explosion.component.css']
})
export class ConfettiExplosionComponent implements OnInit {
  @Output() confettiComplete = new EventEmitter<void>();
  private confetti: any;

  async ngOnInit() {
    // Cargar canvas-confetti dinámicamente
    await this.loadConfetti();
    this.launchConfetti();
  }

  async loadConfetti() {
    try {
      // Intentar cargar canvas-confetti
      const confettiModule = await import('canvas-confetti');
      this.confetti = confettiModule.default || confettiModule;
    } catch (error) {
      console.error('Error al cargar canvas-confetti:', error);
      // Si falla, usar un mock para que la aplicación continúe
      this.confetti = {
        default: () => console.log('Confeti simulado! 🎉')
      };
    }
  }

  launchConfetti() {
    if (!this.confetti) {
      console.error('Confetti no está cargado');
      this.confettiComplete.emit();
      return;
    }

    const duration = 3 * 1000; // 3 segundos
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
    
    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        clearInterval(interval);
        this.confettiComplete.emit();
        return;
      }
      
      const particleCount = 50 * (timeLeft / duration);
      
      // Lanzar confeti desde la izquierda
      this.confetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#ff4081', '#7b1fa2', '#512da8', '#303f9f', '#1976d2', '#03a9f4', '#00bcd4', '#009688']
      });
      
      // Lanzar confeti desde la derecha
      this.confetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 }
      });
    }, 250);
    
    // Explosión inicial grande
    setTimeout(() => {
      this.confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#7b1fa2', '#512da8', '#303f9f']
      });
    }, 500);
  }
}