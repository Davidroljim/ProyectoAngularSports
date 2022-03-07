
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({ selector: 'app-form',
templateUrl: './form.component.html',
styleUrls: ['./form.component.css'] })
export class FormComponent implements OnInit {
    submitted = false;

    public title:string = "Formulario";
    public formularioFutbol = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(4)]),
    fnacimiento: new FormControl('', [Validators.required]),

    
  });
  constructor() { }

    ngOnInit() {
    }

    

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formularioFutbol.invalid) {
            this.error ="Datos incorrectos, por favor revise el formulario";
            return;
        }else{
            this.error ="";
        }

        // display form values on success
        location.href = "mailto:"+this.formularioFutbol.value.correo+'?subject=Buenas: '+this.formularioFutbol.value.nombre +" "+ this.formularioFutbol.value.apellidos+" "+this.formularioFutbol.value.fnacimiento+'&body=Indicanos tu petición por aquí.';
    }

    onReset() {
        this.submitted = false;
        this.formularioFutbol.reset();
    }

      error="";
}