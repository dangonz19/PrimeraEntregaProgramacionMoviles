import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.page.html',
  styleUrls: ['./metodo-pago.page.scss'],
})
export class MetodoPagoPage implements OnInit {

  radioBut:string= "";

  constructor(private router:Router, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  cerrarMenu(){
    this.menuCtrl.close();
  }

  metodopago(){
    this.router.navigateByUrl("login")
  }

  openFirstMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'first-menu');
    this.menuCtrl.open('first-menu');
  }



}
