import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  parametronumeroUno:number | undefined;

  nombre:string = "";
  email:string = "";
  contrasena:string = "";
  constructor(private router:Router, private helperService:HelperService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.parametronumeroUno = this.activatedRoute.snapshot.params['num'];
    console.log("parametro: ", this.parametronumeroUno);
  }

  registro(){
    if(this.nombre==""){
    this.helperService.showAlert("debe ingresar un nombre","Error");
    return;
    }
    
    if(this.email==""){
      this.helperService.showAlert("debe ingresar un email","Error");
      return;
      }

    if(this.contrasena==""){
      this.helperService.showAlert("debe ingresar un contraseña","Error");
      return;
      }
    if(this.nombre=="pgy4121-003d" && this.email=="pgy4121-003d" && this.contrasena=="pgy4121-003d"){
      this.helperService.showAlert("Usuario Creado!","Exito");
      this.router.navigateByUrl("login")
    }else{
      this.helperService.showAlert("credenciales no validas.","Error de autenticación.")
    }
  }

  login(){
    this.router.navigateByUrl("login")
  }
  
}
