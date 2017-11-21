import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { AdministracionPage } from '../../pages/administracion/administracion';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  admin = '';
  contrasena = '';

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {
  }

  mostrarIngreso() {
    let prompt = this.alertCtrl.create({
      title: 'Administración',
      message: "Ingrese su usuario y contraseña",
      inputs: [
        {
          name: 'usuario',
          placeholder: 'Usuario',
          
        },
        {
          name: 'contrasena',
          placeholder: 'Contraseña',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ingresar',
          handler: data => {
            console.log(typeof(data.usuario));
            this.navCtrl.setRoot(AdministracionPage);
            console.log('Saved clicked');
          }

        }
      ]
    });
    prompt.present();
  }
}