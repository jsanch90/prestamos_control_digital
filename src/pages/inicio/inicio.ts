import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { AdministracionPage } from '../../pages/administracion/administracion';
import { LoginServicesProvider } from '../../providers/login-services/login-services';
import { Observable } from 'rxjs/Observable';
import { PrestamoPage } from '../prestamo/prestamo';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  admini: Observable<any>;
  direccion: Observable<any>;
  direction;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loginServicesProvider: LoginServicesProvider) { 
      this.direcciones();
    

  }

  direcciones(){
    this.direction = this.loginServicesProvider.direccionarPagina().subscribe();
  }

  verificar(usuario, contrasena) {
    console.log('usuario', usuario)
    console.log('contra', contrasena)
    this.admini = this.loginServicesProvider.verificarUsuario(usuario, contrasena);
    console.log('usuario', usuario);
    this.admini.subscribe(x => {

      if (x.includes("true")) {
        this.navCtrl.setRoot(AdministracionPage);
      } else {
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
            console.log(typeof (data.usuario));
            this.verificar(data.usuario, data.contrasena);
            console.log('Saved clicked');
          }

        }
      ]
    });
    prompt.present();
  }

  acercarCarnet() {
    let alert = this.alertCtrl.create({
      title: 'Aviso',
      subTitle: 'Acerque el carné al lector por favor',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.registrarUsuario();
            console.log('OK clicked');
          }
        }
      ]
    });
    alert.present();
  }

  registrarUsuario() {
    let prompt = this.alertCtrl.create({
      title: 'Registro de usuario',
      message: "Complete todos los campos para su registro",
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre',

        },
        {
          name: 'correo',
          placeholder: 'Correo'
        },
        {
          name: 'codigo',
          placeholder: 'Código'
        },
        {
          name: 'celular',
          placeholder: 'Celular'
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
          text: 'Guardar',
          handler: data => {
            console.log('Guardar clicked');
          }

        }
      ]
    });
    prompt.present();
  }

  // Método provisional
  prestarItem() {
    this.navCtrl.push(PrestamoPage);
  }

}
