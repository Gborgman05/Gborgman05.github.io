import { Component } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    contactDetails = [
    {
      type: 'Email',
      icon: faEnvelope,
      label: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      type: 'Phone',
      icon: faPhone,
      label: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    },
    {
      type: 'LinkedIn',
      icon: faLinkedin,
      label: 'linkedin.com/in/galen-borgman',
      link: 'https://www.linkedin.com/in/galen-borgman'
    },
    {
      type: 'GitHub',
      icon: faGithub,
      label: 'github.com/gborgman05',
      link: 'https://github.com/gborgman05'
    }
  ];

}