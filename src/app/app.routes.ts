import { Routes } from '@angular/router';
import { formComponent } from './pages/formulario/components/form/form.component';

export const routes: Routes = [
  {
    path: "Formularios",
    component: formComponent,
    loadChildren: async () =>
      (await import("../app/pages/formulario/formulario.module")).FormularioModule,
  }



];
