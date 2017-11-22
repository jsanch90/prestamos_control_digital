import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { AdministracionPage } from '../../pages/administracion/administracion';
import { LoginServicesProvider } from '../../providers/login-services/login-services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  admini : Observable<any>;
  direccion : Observable<any>;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public loginServicesProvider: LoginServicesProvider) {
              this.direccion = this.loginServicesProvider.direccionarPaginaInicio();
              console.log(this.direccion[0]);
  }

  verificar(usuario, contrasena){
    console.log('usuario',usuario)
    console.log('contra',contrasena)
    this.admini = this.loginServicesProvider.verificarUsuario(usuario, contrasena);
    console.log('usuario', usuario);
    this.admini.subscribe(x => {

      if(x.includes("true")){
        this.navCtrl.setRoot(AdministracionPage);
      }else{
        console.log('Error')
      }
    });
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
            this.verificar(data.usuario, data.contrasena);
            console.log('Saved clicked');
          }

        }
      ]
    });
    prompt.present();
  }
}
