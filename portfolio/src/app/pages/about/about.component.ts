import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos una interfaz para asegurar que todos los certificados tengan la misma estructura
export interface Certificate {
  title: string;
  issuer: string; // La institución que lo emite
  imageUrl: string; // La ruta a la imagen
}

@Component({
  selector: 'app-about',
  standalone: true, // Asegúrate de que tu componente sea standalone
  imports: [CommonModule], // Importa CommonModule para usar *ngFor
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  // Array con la información de todos tus certificados
  certificates: Certificate[] = [
    {
      title: 'Angular',
      issuer: 'Coderhouse',
      imageUrl: 'assets/certificates/angular-coderhouse.png'
    },
    {
      title: 'Desarrollo Web',
      issuer: 'Coderhouse',
      imageUrl: 'assets/certificates/desarrollo-web-coderhouse.png'
    },
    {
      title: 'Angular',
      issuer: 'SoloLearn',
      imageUrl: 'assets/certificates/angular-sololearn.jpg'
    },
    {
      title: 'JavaScript Intermediate',
      issuer: 'SoloLearn',
      imageUrl: 'assets/certificates/js-intermedio.jpg'
    },
    {
      title: 'JavaScript desde Cero',
      issuer: 'EDteam',
      imageUrl: 'assets/certificates/certificad-curso-javascript.jpg'
    },
    {
      title: 'Introducción a POO',
      issuer: 'EDteam',
      imageUrl: 'assets/certificates/certificad-curso-poo.jpg'
    },
    {
      title: 'Web Development',
      issuer: 'SoloLearn',
      imageUrl: 'assets/certificates/web-development-sololearn.png'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'SoloLearn',
      imageUrl: 'assets/certificates/prompt-engineering.jpg'
    },
    {
      title: 'Introduction to CSS',
      issuer: 'SoloLearn',
      imageUrl: 'assets/certificates/css-sololearn.jpg'
    }
  ];
}
