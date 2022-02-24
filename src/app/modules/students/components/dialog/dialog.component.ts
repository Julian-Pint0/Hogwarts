import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form!: FormGroup;

  constructor( private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<DialogComponent> ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  // Validaciones

  get nameIsValid(){
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }
  
  get lastNameIsValid(){
    return this.form.get('lastName')?.invalid && this.form.get('lastName')?.touched;
  }

  get genderIsValid(){
    return this.form.get('house')?.invalid && this.form.get('gender')?.touched;
  }

  get houseIsValid(){
    return this.form.get('house')?.invalid && this.form.get('house')?.touched;
  }

  createForm(){  // creacion e inicialización del formulario
    this.form = this.formBuilder.group({
      name: [ '', [ Validators.required, Validators.minLength(5) ]  ],
      lastName: [ '', [ Validators.required, Validators.minLength(5) ]  ],
      gender: [ 'Female', Validators.required ],
      house: [ 'Gryffindor', [ Validators.required ] ] 
    });
  }

  save(){  //funcion para guardar la solicitud en el localStorage
    this.markAsTouched();
    if( this.studentIsRepeated( this.form.value ) ){
      this._snackBar.open( 'This student already has an application', 'x', { duration: 2000} );
    }else{
      let req: any = [];
      if( localStorage.getItem( 'requests' ) ){
        req =  JSON.parse (localStorage.getItem( 'requests' ) ?? '' ) ;
      }
      req.push( this.form.value );
      localStorage.setItem( 'requests', JSON.stringify(req) );
      this._snackBar.open( 'application registered successfully', 'x', { duration: 2000} );
      this.dialogRef.close();
    }
  }

  markAsTouched(){  //funcion para marcar todos los inputs
    if(  this.form.invalid ){
      return Object.values( this.form.controls ).forEach( control => {
        control.markAsTouched();
      });
    }
  }

  studentIsRepeated( student: any ){ //se valida si una solicitud de estudiante esta repetida
    let resp: boolean = false;
    if( localStorage.getItem( 'requests' ) ){
      let reqs: any[] = JSON.parse( localStorage.getItem( 'requests' )  ?? '');
      const found = reqs.find( ( req :any)  => {
        return req.name == student.name && req.lastName == student.lastName;
      });
      resp = found === undefined ? false: true; 
    }
    return resp;
  } 

}
