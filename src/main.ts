import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ConfettiExplosionComponent } from './app/confetti-explosion/confetti-explosion.component';
import { BirthdayMessageComponent } from './app/birthday-message/birthday-message.component';
import { ImageGalleryComponent } from './app/image-gallery/image-gallery.component';
import { PersonalDedicationComponent } from './app/personal-dedication/personal-dedication.component';

bootstrapApplication(AppComponent, {
  providers: [
    ConfettiExplosionComponent,
    BirthdayMessageComponent,
    ImageGalleryComponent,
    PersonalDedicationComponent
  ]
}).catch(err => console.error(err));