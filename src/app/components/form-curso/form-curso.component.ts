import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {

  formcurso:FormGroup;
  activarMen:boolean=false;

  constructor(public form:FormBuilder) { 
    this.formcurso=this.form.group({
      nombre:['', Validators.required],
      nota1:['', Validators.required],
      porce1:['', Validators.required],
      nota2:['', Validators.required],
      porce2:['', Validators.required],
      nota3:['', Validators.required],
      porce3:['', Validators.required],
      nota4:['', Validators.required],
      porce4:['', Validators.required],
      nota5:['', Validators.required],
      porce5:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ValidarDatos(){
    console.log(this.formcurso.get("nombre")?.value);
    console.log(this.formcurso.get("nota1")?.value);
    console.log(this.formcurso.get("porce1")?.value);
    console.log(this.formcurso.get("nota2")?.value);
    console.log(this.formcurso.get("porce2")?.value);
    console.log(this.formcurso.get("nota3")?.value);
    console.log(this.formcurso.get("porce3")?.value);
    console.log(this.formcurso.get("nota4")?.value);
    console.log(this.formcurso.get("porce4")?.value);
    console.log(this.formcurso.get("nota5")?.value);
    console.log(this.formcurso.get("porce5")?.value);

    this.activarMen=true;
  }

}
