import { Injectable } from '@angular/core';

const CONFIG = {
  apiUrl: 'http://localhost:5000/'
};

@Injectable()
export class ProviderSettingsProvider {

  constructor() {
    
  }

  public getApiUrl(){
    return CONFIG.apiUrl;
  }

}
