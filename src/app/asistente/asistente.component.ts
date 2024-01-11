import { Component, OnInit } from '@angular/core';
import { Asistente } from '../model/Asistente';
import { AsistenteService } from '../service/asistente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.component.html',
  styleUrls: ['./asistente.component.css'],
})
export class AsistenteComponent implements OnInit {
  titulo: string = 'Listado de Asistentes';
  listaDeEventos: Asistente[] = [];
  constructor(
    private asistenteService: AsistenteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.asistenteService
      .recuperarAsistente()
      .subscribe((lista) => (this.listaDeEventos = lista));
  }
}
