import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ProviderSettingsProvider } from '../../providers/provider-settings/provider-settings';

@Injectable()
export class LoginServicesProvider {

  apiUrl = this.providerSettingsProvider.getApiUrl();

  constructor(public http: Http,
              public providerSettingsProvider: ProviderSettingsProvider) {

  }

  public verificarUsuario(usuario, contrasena){
    console.log('usuario srvice',usuario)
    console.log('contrasena srvice',contrasena)
    return this.http.post(this.apiUrl+'administracion', {'usuario': usuario, 'contrasena': contrasena}).
           map(response => response.text());


  }

  
  
}
