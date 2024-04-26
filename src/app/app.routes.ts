import { Routes } from '@angular/router';
import { FormComponent } from './pages/formulario/components/form/form.component';

export const routes: Routes = [
    {
        path: "formularios",
        component: FormComponent,
        loadChildren: async () => 
            (await import("../app/pages/formulario/formulario.module")).FormularioModule,
    },

];
