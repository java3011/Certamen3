import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { MateriasComponent } from './components/materias/materias.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:"form-curso", component: FormCursoComponent},
  {path:"materias", component: MateriasComponent},
  {path:"", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
