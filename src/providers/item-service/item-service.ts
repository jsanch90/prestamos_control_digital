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

}
