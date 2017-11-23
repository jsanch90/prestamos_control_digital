import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistroServiceProvider {

  apiUrl = this.providerSettingsProvider.getApiUrl();

  constructor(public http: Http,
    public providerSettingsProvider: ProviderSettingsProvider) {
  }

  // public registrarUsuario(nombre, correo, codigo, celular){
  //   return this.http.post(this.apiUrl+'usuario', {'nombre' : nombre, 'correo' : correo, 'codigoE'})
  // }

}
