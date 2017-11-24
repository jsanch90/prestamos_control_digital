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
  nombre = '';
  correo = '';
  codigoE = '';
  celular = '';
  codigoC = '';

  // Ac = Actualizado
  nombreAc = '';
  correoAc = '';
  codigoEAc = '';
  celularAc = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public itemServiceProvider: ItemServiceProvider,
    public toastController: ToastController,
    public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdministracionPage');
  }

  volverInicio() {
    this.navCtrl.setRoot(InicioPage);
  }

  private showToast(message: string) {
    let toast = this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  agregarItem() {
    console.log("item", this.item)
    this.itemServiceProvider.agregarItem(this.item).subscribe(x => {
      if (x.includes('true')) {
        this.showToast("Item agregado satisfactoriamente");
      }
      else {
        this.showToast("El item ya está agregado");
      }
    });
    this.item = '';
  }

  acercarCarnet() {
    let alert = this.alertCtrl.create({
      title: 'Aviso',
      subTitle: 'Acerque el carné al lector por favor',
    });
    alert.present();
    this.itemServiceProvider.direccionarPagina().subscribe(x => {
      let estado = x.status
      if (estado.includes('true')) {
        console.log('Estamos en prestamos')
        alert.dismiss();
        this.mostrarInformacion(x.result);
        // this.navCtrl.setRoot(AdministracionPage,{usuario:x.result});
      } else {
        console.log('Estamos en registrar usuario')
        alert.dismiss();
      }
    });
  }

  mostrarInformacion($) {
    console.log($)
    console.log($.nombre);
    this.nombre = $[5];
    this.correo = $[2];
    this.codigoE = $[4];
    this.celular = $[6];
    this.codigoC = $[3];

  }

  actualizarInformacion() {
    this.itemServiceProvider.actualizarInformacion(this.nombreAc, this.correoAc, this.codigoC, this.codigoEAc, this.celularAc).subscribe();
    if (!(this.nombreAc == "" || this.nombreAc == " ")) {
      this.nombre = this.nombreAc;
    }
    if (!(this.correoAc == "" || this.correoAc == " ")) {
      this.correo = this.correoAc;
    }
    if (!(this.codigoEAc == "" || this.codigoEAc == " ")) {
      this.codigoE = this.codigoEAc;
    }
    if (!(this.celularAc == "" || this.celularAc == " ")) {
      this.celular = this.celularAc;
    }
    this.nombreAc = '';
    this.correoAc = '';
    this.codigoEAc = '';
    this.celularAc = '';
    this.showToast("Información actualizada");
  }

}
