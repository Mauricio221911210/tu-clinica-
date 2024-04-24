//Sirve solo para Formularios validaciones
//FormControl siempre es el mimso

import { FormControl, Validators } from "@angular/forms";

export class formU{
  nombre = new FormControl<string>("",[Validators.required]);
  apellido_paterno = new FormControl<string>("",[Validators.required]);
  apellido_materno = new FormControl<string>("",[Validators.required]);


}




