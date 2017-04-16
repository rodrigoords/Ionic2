import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddCard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCard {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCard');
  }

  cancel(){
    this.view.dismiss();
  }
}
