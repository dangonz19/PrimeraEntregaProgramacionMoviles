import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private route:Router, private helperService:HelperService, private activatedRoute:ActivatedRoute) { }

  parametronumeroDos:number | undefined;

  email:string = "";

  ngOnInit() {
    this.parametronumeroDos = this.activatedRoute.snapshot.params['num2'];
    console.log("parametro: ", this.parametronumeroDos);
  }

  login(){
    
    this.route.navigateByUrl("login")
  }

  enviCorr(){
    if(this.email=="pgy4121-003d"){
      this.helperService.showAlert("Correo Enviado!","Exito!");
    }else{
      this.helperService.showAlert("ingrese un correo","Error!");
    }
      
    }
    
  }