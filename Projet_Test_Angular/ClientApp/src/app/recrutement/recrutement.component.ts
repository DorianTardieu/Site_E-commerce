import { Component } from '@angular/core';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
})
export class RecrutementComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
