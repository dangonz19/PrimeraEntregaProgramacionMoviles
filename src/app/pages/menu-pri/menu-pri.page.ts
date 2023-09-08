import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';


@Component({
  selector: 'app-menu-pri',
  templateUrl: './menu-pri.page.html',
  styleUrls: ['./menu-pri.page.scss'],
})
export class MenuPriPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  
  private animation!: Animation

  constructor(private router:Router,private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("#Disponible",))
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

  
  play() {
    this.animation.play();
  }

 

  stop() {
    this.animation.stop();
  }


  opDisponible(){
    this.router.navigateByUrl("/op-disponible");
  }
  opSolicitar(){
    this.router.navigateByUrl("/op-solicitar")
  }
  logOut(){
    this.router.navigateByUrl("login");
  }


}
