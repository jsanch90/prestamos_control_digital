import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ItemServiceProvider } from '../../providers/item-service/item-service';

@IonicPage()
@Component({
  selector: 'page-prestamo',
  templateUrl: 'prestamo.html',
})
export class PrestamoPage {

  items: Observable<any>;
  itemSeleccionado = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public itemServiceProvider: ItemServiceProvider) {

    this.traerItem();

  }

  traerItem() {
    this.items = this.itemServiceProvider.traerItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrestamoPage');
  }

  agregarCarrito(item) {
    console.log("carrito", item);
   
    if (this.itemSeleccionado[item] != true){
      this.itemSeleccionado[item] = true;
      console.log("lista: ", this.itemSeleccionado)

    } else {

      this.itemSeleccionado[item] = false;
      console.log("lista: ", this.itemSeleccionado)
    }

  }
}


