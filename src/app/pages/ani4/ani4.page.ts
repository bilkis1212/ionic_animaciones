import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular'
import { Animation } from '@ionic/core';
@Component({
  selector: 'app-ani4',
  templateUrl: './ani4.page.html',
  styleUrls: ['./ani4.page.scss'],
})
export class Ani4Page implements OnInit {

  constructor(private animationCtrl: AnimationController) {
    const animacion:Animation = animationCtrl.create()
    .addElement(document.querySelector('capa'))
    .duration(1000)
    .fromTo('opacity',1,0);
    animacion.play;
   }

  ngOnInit() {
  }

}
