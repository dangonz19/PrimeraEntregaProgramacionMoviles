import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-op-disponible',
  templateUrl: './op-disponible.page.html',
  styleUrls: ['./op-disponible.page.scss'],
})
export class OpDisponiblePage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Datos agregados!',
      message: 'Sus datos se guardaron correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

