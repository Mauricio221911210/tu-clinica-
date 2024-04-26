//Rutas y definir
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: "Formulario"
    },
    component: FormComponent,
    title:"Formulario"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule {

}
