import { Component, OnInit } from '@angular/core';
import { Cv } from './cv.model';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //MAJ
  }

  cvs: Cv[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@gmail.com',
      phone: '+1 (123) 456-7890',
      skills: ['JavaScript', ' React.js'],
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      qualite: 'Créatif, Rigoureux, Dynamique'
    },
    {
      id: 2,
      name: 'Bob Williams',
      email: 'bob.williams@gmail.com',
      phone: '+1 (234) 567-8901',
      skills: ['Python', ' Django'],
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      qualite: 'Fiable, Polyvalent, Proactif'
    },
    {
      id: 3,
      name: 'Eva Brown',
      email: 'eva.brown@gmail.com',
      phone: '+1 (345) 678-9012',
      skills: ['Java', ' Spring Boot'],
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      qualite: 'Autonome, Organisé, Visionnaire'
    },
    {
      id: 4,
      name: 'Romane Rodriguez',
      email: 'romane.rodriguez@gmail.com',
      phone: '+1 (555) 123-4567',
      skills: ['Python', ' Machine Learning', ' Data Analysis'],
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      qualite: 'Persévérant, Communicatif, Innovant'
    },
    {
      id: 5,
      name: 'Léo Dubois',
      email: 'leo.dubois@gmail.com',
      phone: '+1 (555) 987-6543',
      skills: ['JavaScript', 'Web Development', 'UI/UX Design'],
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      qualite: 'Créatif, Organisé, Flexible'
    }
  ];
  selectedCv: Cv | null = null;

  showDetails(cv: Cv) {
    this.selectedCv = cv;
  }
}
