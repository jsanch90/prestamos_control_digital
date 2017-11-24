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
  itemSeleccionado = [];
  itemsParaDevolver = [];
  usuario;
  codigoC = '';
  itemsPersona:Observable<any>;
  listaDeItems =[];
  dic= {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public itemServiceProvider: ItemServiceProvider) {
    this.usuario = this.navParams.get('usuario');
    this.codigoC = this.usuario[3];
    this.traerItem();
    this.traerItemsPersona();
  }


   machetear(){
    this.agregarItemUsuario()
    this.agregarItemUsuario()

   }

   elregresodelmachete(){
    this.devolver()
    this.devolver()
   }

  devolver(){
    this.itemServiceProvider.devolverItemsPersona(this.codigoC,this.itemsParaDevolver).subscribe();
    this.itemsParaDevolver = []
    this.navCtrl.setRoot(PrestamoPage,{usuario: this.usuario});
  }

  traerItem() {
    this.items = this.itemServiceProvider.traerItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrestamoPage');
  }

  agregarItemUsuario(){
    this.itemServiceProvider.agregarItemsUsuario(this.codigoC,this.itemSeleccionado).subscribe();
    this.itemSeleccionado = []
    this.navCtrl.setRoot(PrestamoPage,{usuario: this.usuario});
  }

  traerItemsPersona(){
    this.itemsPersona = this.itemServiceProvider.traerItemsPersona(this.codigoC);
    //this.itemsPersona[0]

  }

  agregarCarrito(item) {
    console.log("carrito", item);
    console.log("Dic: ",this.dic);
    if(this.chequearSiEsta(this.itemSeleccionado,item)){
      console.log("entro agg carrito")
      this.itemSeleccionado.splice(this.itemSeleccionado.indexOf(item),1)}
    else{
      this.itemSeleccionado.push(item)
    };
    console.log(this.itemSeleccionado, "agregar carrito")

  }

  chequearSiEsta(arreglo, item){
    for(let i = 0; i < arreglo.length ; i++){
      if(arreglo[i]== item){
        return true;
      }
    return false;
    }

  }

  devolverItem($) {
    let item = $[0]
    console.log("tienda", item);
     console.log("Dic: ",this.dic);
    if(this.chequearSiEsta(this.itemsParaDevolver,item)){
      console.log("kajshdkjashdakjsd")
      this.itemsParaDevolver.splice(this.itemsParaDevolver.indexOf(item),1)}
    else{
      this.itemsParaDevolver.push(item)
    };
    console.log(this.itemsParaDevolver, "devolver item")
    

  }
}


