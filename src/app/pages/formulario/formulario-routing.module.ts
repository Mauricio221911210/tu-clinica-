//Rutas y definir
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: "Formulario"
    },
    component: formComponent,
    title:"Formulario"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule {

}
