import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { ItemServiceProvider } from '../../providers/item-service/item-service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-administracion',
  templateUrl: 'administracion.html',
})

export class AdministracionPage {

  item = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public itemServiceProvider: ItemServiceProvider,
    public toastController: ToastController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdministracionPage');
  }

  volverInicio(){
    this.navCtrl.setRoot(InicioPage);
  }

  private showToast(message:string){
    let toast = this.toastController.create({
      message : message,
      duration:3000
    });
    toast.present();
  }

  agregarItem(){
    console.log("item", this.item)
    this.itemServiceProvider.agregarItem(this.item).subscribe(x => {
      if(x.includes('true')){
        this.showToast("Item agregado satisfactoriamente");
      }
      else{
        this.showToast("El item ya está agregado");
      }
    });
    this.item = '';
  }

  acercarCarnet() {
    let alert = this.alertCtrl.create({
      title: 'Aviso',
      subTitle: 'Acerque el carné al lector por favor',
      buttons: ['OK']
    });
    alert.present();
  }

}
