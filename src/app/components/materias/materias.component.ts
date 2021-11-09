import { Component, OnInit } from '@angular/core';
import { ListaRamos, Ramos } from 'src/app/interfaces/ramos';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {

  ListaRamos=ListaRamos;

  constructor() { }

  ngOnInit(): void {
  }

}
