import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemServiceProvider {

  apiUrl = this.providerSettingsProvider.getApiUrl();

  constructor(public http: Http,
    public providerSettingsProvider: ProviderSettingsProvider) {
  }

  public agregarItem(nombre){
    return this.http.post(this.apiUrl+'item', {'nombre' : nombre}).
    map(response => response.text())
  }

  public traerItems(){
    return this.http.get(this.apiUrl+'items').map(response => response.json().result);
  }

  public agregarItemsUsuario(codigoC,listaItems){
    return this.http.post(this.apiUrl+'addItemUser', {'codigoC' : codigoC,'items':listaItems}).
    map(response => response.json().result)
  }

  public traerItemsPersona(codigoC){
    return this.http.get(this.apiUrl+'itemPorPersona?codigoC='+codigoC).map(response => response.json().result);
  }

  public devolverItemsPersona(codigoC,listaItems){
    return this.http.post(this.apiUrl+'devolver', {'codigoC' : codigoC,'cosas':listaItems}).
    map(response => response.json().result)
  }

}
