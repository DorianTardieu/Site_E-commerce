import { Component, Input, OnInit } from '@angular/core';
import { Cv } from './cv.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //MAJ
  }

  @Input() cv: Cv | null = null;
}
