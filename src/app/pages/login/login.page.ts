import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasena:string = "";

  constructor(private router:Router, private helperService:HelperService) { }

  ngOnInit() {
  }

  login(){
    if (this.email==""){
      this.helperService.showAlert("debe ingresar un email.","Error");
      return;
    }

    if (this.contrasena==""){
      this.helperService.showAlert("debe ingresar una contraseñas.","Error");
      return;
    }
    if (this.email == "pgy4121-003d" && this.contrasena == "pgy4121-003d"){
      this.router.navigateByUrl("menu-pri");
    }else{
      this.helperService.showAlert("Credenciales no validas.","error de autenticación");
    }
  }

 recuperar(){
  var parametroN2 = 654321;
  this.router.navigateByUrl(parametroN2 + "/recuperar")
 }
 registro(){
  var parametroN1 = 123456;
    this.router.navigateByUrl( parametroN1 +"registro");
 }
  


}