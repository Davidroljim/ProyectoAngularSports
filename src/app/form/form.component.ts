
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
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(5)]),
    fnacimiento: new FormControl('', [Validators.required]),

    
  });
  constructor() { }

    ngOnInit() {
    }

    // convenience getter for easy access to form fields
    get f() { return this.formularioFutbol.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formularioFutbol.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formularioFutbol.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.formularioFutbol.reset();
    }
    //Coger datos formulario
    get nombre() {
        return this.formularioFutbol.get('nombre')?.value;
      }

    get apellidos() {
        return this.formularioFutbol.get('apellidos')?.value;
    }

    get correo() {
        return this.formularioFutbol.get('correo')?.value;
      }

    get fnacimiento() {
        return this.formularioFutbol.get('fnacimiento')?.value;
      }

      error="";
    enviarDatos(){
        
        //console.warn (this.formularioFutbol.value);

        if (!this.formularioFutbol.invalid) {
            this.error ="";
            
        }else{
            this.error ="Datos incorrectos, por favor revise el formulario";
            
        }
        
   }
}