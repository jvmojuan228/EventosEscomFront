import { Component, OnInit } from '@angular/core';
import { Evento } from '../model/Evento';
import { Asistente } from '../model/Asistente';
import { AsistenteService } from '../service/asistente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asistenteform',
  templateUrl: './asistenteform.component.html',
  styleUrls: ['./asistenteform.component.css'],
})
export class AsistenteformComponent implements OnInit {

  titulo: string = 'asistente form';
  listaDeEventos: Evento[] = [];
  asistente: Asistente = new Asistente();
  constructor(
    private asistenteService: AsistenteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.asistenteService
        .leerAsistente(id)
        .subscribe((elAsistente) => (this.asistente = elAsistente));
    });
    this.asistenteService
      .obtenerEventos()
      .subscribe(
        (eventosRecuperados) => (this.listaDeEventos = eventosRecuperados)
      );
  }

  registrarAsistente(): void {
    this.asistenteService
      .crearAsistente(this.asistente)
      .subscribe((elAsistente) => {
        this.router.navigate(['/asistentes']);
      });
    Swal.fire(
      'Registrar Asistente',
      `${this.asistente.nombre} Se ha registrado correctamente.`,
      'success'
    );
  }

  actualizarAsistente(): void {
    this.asistenteService
      .actualizarAsistente(this.asistente)
      .subscribe((elAsistente) => {
        this.router.navigate(['/asistentes']);
      });
    Swal.fire(
      'Actualizar Asistente',
      `${this.asistente.nombre} Se ha actualizado correctamente.`,
      'success'
    );
  }

  eliminarAsistente(): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.asistenteService.eliminarAsistente(this.asistente.idAsistente)
          .subscribe((elAsistente) => {
            
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    })
  }
}
