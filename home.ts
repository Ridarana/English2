import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import{ MenuPage } from '../menu/menu';
import{ PresentPage } from '../present/present';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
menuPage= MenuPage;
pushPage(){
this.navCtrl.push(PresentPage);
}



  constructor(public navCtrl: NavController , public toastCtrl: ToastController ){

  }
toastPage(){
let toast=this.toastCtrl.create({
message:'Go to Menu page sucessfully.',
duration: 3000
});
toast.present();
}
showToast(){
let toast=this.toastCtrl.create({
message: 'Mmmmmm,buttered toast',
showCloseButton: true,
closeButtonText: 'Ok'

});
toast.present(toast);
}
}
