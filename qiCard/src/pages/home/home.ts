import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddCard } from '../add-card/add-card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  presentModal() {
    let modal = this.modalCtrl.create(AddCard);
    modal.present();
  }

}
