import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-dedication',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dedication">
      <h2 class="dedication-title">Un Mensaje Especial para Carlos</h2>
      <p class="dedication-subtitle">En sus 20 años</p>
      
      <div class="dedication-message">
        <div class="message-card">
          <div class="message-header">
            <div class="message-icon">💌</div>
            <h3>Para Carlos Mass</h3>
          </div>
          
          <div class="message-content">
            <p>Querido Carlos,</p>
            
            <p>En este día tan especial, queremos desearte un feliz cumpleaños número 20. Que este nuevo año de vida esté lleno de aventuras, éxitos y momentos inolvidables.</p>
            
            <p>Eres una persona increíble, llena de talento y bondad. Que cada uno de tus sueños se haga realidad y que encuentres en cada día una razón para sonreír.</p>
            
            <p>Recuerda que la vida es un viaje maravilloso y tú tienes todo lo necesario para hacerlo extraordinario. A tus 20 años, el mundo está a tus pies.</p>
            
            <div class="highlighted">
              <p>"Que la felicidad te acompañe siempre, que el éxito sea tu compañero y que el amor llene cada día de tu vida."</p>
            </div>
            
            <p>¡Brindamos por ti, por tus 20 años y por todo lo maravilloso que está por venir!</p>
            
            <p class="signature">Con mucho cariño,<br>Tus amigos y familiares</p>
          </div>
          
          <div class="message-footer">
            <span class="footer-icon">🎂</span>
            <span>20 de [Mes] de 2024</span>
            <span class="footer-icon">🎉</span>
          </div>
        </div>
        
        <div class="wishes-list">
          <h4>Nuestros deseos para ti:</h4>
          <ul>
            <li><span class="wish-icon">✨</span> Salud y felicidad eterna</li>
            <li><span class="wish-icon">🚀</span> Éxito en todos tus proyectos</li>
            <li><span class="wish-icon">❤️</span> Amor y amistades verdaderas</li>
            <li><span class="wish-icon">🌟</span> Sueños que se hagan realidad</li>
            <li><span class="wish-icon">🎯</span> Metas alcanzadas con alegría</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./personal-dedication.component.css']
})
export class PersonalDedicationComponent {}