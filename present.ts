import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import{ HomePage } from '../home/home';

/*
  Generated class for the Present page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-present',
  templateUrl: 'present.html'
})
export class PresentPage {
homePage=HomePage;


  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {}
  toastPage(){
let toast=this.toastCtrl.create({
message:'Go to Home page sucessfully.',
duration: 3000
});
toast.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentPage');
  }

}
