import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactDetails = [
    {
      type: 'Email',
      icon: 'https://example.com/email-icon.svg',
      label: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      type: 'Phone',
      icon: 'https://example.com/phone-icon.svg',
      label: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    },
    {
      type: 'LinkedIn',
      icon: 'https://linkedin.com/linkedin-icon.svg',
      label: 'linkedin.com/in/yourusername',
      link: 'https://www.linkedin.com/in/yourusername'
    },
    {
      type: 'GitHub',
      icon: 'https://github.com/github-icon.svg',
      label: 'github.com/yourusername',
      link: 'https://github.com/yourusername'
    }
  ];
}