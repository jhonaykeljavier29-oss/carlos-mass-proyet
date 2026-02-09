import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery">
      <h2 class="gallery-title">Galería de Carlos</h2>
      <p class="gallery-subtitle">Momentos especiales de sus 20 años</p>
      
      <div class="image-container">
        <!-- Imagen 1 con fallback inteligente -->
        <div class="image-wrapper">
          <img 
            [src]="getImagePath('carlos1.jpg')" 
            alt="Carlos - Foto 1"
            class="gallery-image"
            (error)="useFallbackImage(1)"
            [class.hidden]="showFallback[0]"
          >
          <div class="fallback-image" *ngIf="showFallback[0]">
            <div class="fallback-content">
              <div class="fallback-icon">📸</div>
              <div class="fallback-text">Carlos - Foto 1</div>
              <div class="fallback-message">Un momento especial</div>
            </div>
          </div>
          <div class="image-info">
            <span class="image-number">1</span>
            <span class="image-caption">Un momento especial lleno de alegría</span>
          </div>
        </div>
        
        <!-- Imagen 2 (esta SÍ funciona) -->
        <div class="image-wrapper">
          <img 
            [src]="getImagePath('carlos2.jpg')" 
            alt="Carlos - Foto 2"
            class="gallery-image"
          >
          <div class="image-info">
            <span class="image-number">2</span>
            <span class="image-caption">Sonriendo y disfrutando la vida</span>
          </div>
        </div>
        
        <!-- Imagen 3 con fallback -->
        <div class="image-wrapper">
          <img 
            [src]="getImagePath('carlos3.jpg')" 
            alt="Carlos - Foto 3"
            class="gallery-image"
            (error)="useFallbackImage(3)"
            [class.hidden]="showFallback[2]"
          >
          <div class="fallback-image" *ngIf="showFallback[2]">
            <div class="fallback-content">
              <div class="fallback-icon">🎂</div>
              <div class="fallback-text">Carlos - Foto 3</div>
              <div class="fallback-message">Recuerdo especial</div>
            </div>
          </div>
          <div class="image-info">
            <span class="image-number">3</span>
            <span class="image-caption">Un recuerdo que atesoraremos siempre</span>
          </div>
        </div>
      </div>
      
      <!-- Panel de ayuda -->
      <div class="help-panel" *ngIf="showHelp">
        <h3>🔧 Solución rápida:</h3>
        <p>Para cargar todas las imágenes:</p>
        <div class="solution-steps">
          <div class="step">
            <span class="step-number">1</span>
            <span class="step-text">Abre la terminal en tu proyecto</span>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <span class="step-text">Ejecuta: <code>dir src\assets\images\</code></span>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <span class="step-text">Verifica los nombres exactos de las imágenes</span>
          </div>
          <div class="step">
            <span class="step-number">4</span>
            <span class="step-text">Renombra o copia las imágenes para que sean: carlos1.jpg, carlos2.jpg, carlos3.jpg</span>
          </div>
        </div>
        <button class="refresh-button" (click)="checkImages()">🔄 Verificar imágenes</button>
      </div>
      
      <div class="gallery-footer">
        <p>¡Carlos, que estos 20 años sean el inicio de una vida extraordinaria!</p>
        <div class="signature">Hecho con ❤️ por Jhonaykel</div>
      </div>
    </div>
  `,
  styles: [`
    .gallery {
      text-align: center;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .gallery-title {
      font-size: 2.5rem;
      color: #81d4fa;
      margin-bottom: 10px;
      text-shadow: 0 0 10px rgba(129, 212, 250, 0.3);
    }
    
    .gallery-subtitle {
      color: #bbbbbb;
      margin-bottom: 40px;
      font-size: 1.2rem;
      font-style: italic;
    }
    
    .image-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-bottom: 40px;
    }
    
    .image-wrapper {
      position: relative;
      background: rgba(40, 40, 60, 0.8);
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }
    
    .image-wrapper:hover {
      transform: translateY(-10px);
      border-color: rgba(255, 64, 129, 0.5);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
    
    .gallery-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }
    
    .gallery-image.hidden {
      display: none;
    }
    
    .image-wrapper:hover .gallery-image {
      transform: scale(1.05);
    }
    
    .fallback-image {
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    }
    
    .fallback-content {
      text-align: center;
      padding: 30px;
    }
    
    .fallback-icon {
      font-size: 4rem;
      margin-bottom: 20px;
      opacity: 0.8;
    }
    
    .fallback-text {
      font-size: 1.8rem;
      color: #81d4fa;
      margin-bottom: 10px;
      font-weight: bold;
    }
    
    .fallback-message {
      font-size: 1.2rem;
      color: #bbbbbb;
    }
    
    .image-info {
      padding: 25px;
      background: rgba(30, 30, 50, 0.9);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .image-number {
      display: inline-block;
      background: #ff4081;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      line-height: 40px;
      font-weight: bold;
      font-size: 1.2rem;
      margin-right: 15px;
      vertical-align: middle;
    }
    
    .image-caption {
      font-size: 1.3rem;
      color: #e0e0e0;
      vertical-align: middle;
    }
    
    .help-panel {
      background: rgba(255, 193, 7, 0.1);
      border-radius: 15px;
      padding: 30px;
      margin: 40px 0;
      border-left: 5px solid #ffc107;
      text-align: left;
    }
    
    .help-panel h3 {
      color: #ffc107;
      margin-top: 0;
      font-size: 1.5rem;
    }
    
    .help-panel p {
      color: #e0e0e0;
      font-size: 1.1rem;
      margin-bottom: 20px;
    }
    
    .solution-steps {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 25px 0;
    }
    
    .step {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .step-number {
      background: #ff4081;
      color: white;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
    }
    
    .step-text {
      color: #e0e0e0;
      font-size: 1.1rem;
    }
    
    code {
      background: rgba(0, 0, 0, 0.3);
      padding: 5px 10px;
      border-radius: 5px;
      font-family: monospace;
      color: #4db6ac;
    }
    
    .refresh-button {
      background: linear-gradient(45deg, #ff4081, #7b1fa2);
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 20px;
    }
    
    .refresh-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(255, 64, 129, 0.4);
    }
    
    .gallery-footer {
      background: rgba(255, 64, 129, 0.1);
      border-radius: 15px;
      padding: 30px;
      margin-top: 40px;
      border-top: 2px solid rgba(255, 64, 129, 0.3);
    }
    
    .gallery-footer p {
      font-size: 1.4rem;
      color: #81d4fa;
      margin-bottom: 20px;
      font-style: italic;
    }
    
    .signature {
      font-size: 1.2rem;
      color: #ff4081;
      font-weight: bold;
    }
    
    @media (max-width: 768px) {
      .image-container {
        grid-template-columns: 1fr;
      }
      
      .gallery-title {
        font-size: 2rem;
      }
      
      .gallery-image {
        height: 250px;
      }
      
      .fallback-image {
        height: 250px;
      }
    }
  `]
})
export class ImageGalleryComponent implements OnInit {
  showFallback = [false, false, false];
  showHelp = false;

  ngOnInit() {
    // Verificar imágenes después de un momento
    setTimeout(() => {
      this.checkImages();
    }, 1000);
  }

  getImagePath(filename: string): string {
    return `assets/images/${filename}`;
  }

  useFallbackImage(imageNumber: number) {
    const index = imageNumber - 1;
    this.showFallback[index] = true;
    this.showHelp = true;
  }

  checkImages() {
    // Revisar si alguna imagen usa fallback
    const anyFallback = this.showFallback.some(fallback => fallback);
    this.showHelp = anyFallback;
    
    if (anyFallback) {
      console.log('Algunas imágenes no se cargaron. Verifica los archivos:');
      console.log('Deben estar en: src/assets/images/');
      console.log('Con nombres: carlos1.jpg, carlos2.jpg, carlos3.jpg');
    }
  }
}