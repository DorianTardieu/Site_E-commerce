import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cartevisite.component.html',
  styleUrls: ['./cartevisite.component.css']
})
export class CartevisiteComponent implements OnInit {
  nom = '';
  prenom = '';
  metier = '';
  description = '';
  constructor() { }

  ngOnInit(): void {
    // MAJ
  }
  onSubmit() {
    // MAJ
  }
}
