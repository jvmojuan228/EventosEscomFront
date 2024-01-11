import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { AsistenteComponent } from './asistente/asistente.component';
import { AsistenteformComponent } from './asistenteform/asistenteform.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'asistentes', component: AsistenteComponent },
  { path: 'asistentesForm/:id', component: AsistenteformComponent },
  { path: 'asistentesForm', component: AsistenteformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
