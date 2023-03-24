import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name = 'Galen Borgman';
  profilePicture = 'https://example.com/your-profile-picture.jpg';
  description = `I am an early-career software engineer with a strong passion for Angular and web technologies. My curiosity extends beyond the realm of web development, as I am also deeply interested in machine learning and its potential to revolutionize various industries. Alongside my technical pursuits, I have a deep appreciation for the art of poetry, which I believe enriches my creative thinking and problem-solving skills. Balancing my love for technology and the written word, I strive to craft innovative, efficient, and scalable solutions that make a difference.`;

  favoriteBooks = [
    'Mistborn',
    'The Way of Kings',
    'Dune'
  ];

  hobbies = [
    'Board Games',
    'Hiking',
    'Horror Movies'
  ];

  favoriteMovies = [
    'Hereditary',
    'Inception',
    'The Secret Life of Walter Mitty'
  ];

  favoriteMusic = [
    'Noah Kahan',
    'Takenobu',
    'Hozier'
  ];
}