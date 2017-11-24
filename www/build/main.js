webpackJsonp([2],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministracionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_item_service_item_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdministracionPage = (function () {
    function AdministracionPage(navCtrl, navParams, itemServiceProvider, toastController, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemServiceProvider = itemServiceProvider;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.item = '';
    }
    AdministracionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdministracionPage');
    };
    AdministracionPage.prototype.volverInicio = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */]);
    };
    AdministracionPage.prototype.showToast = function (message) {
        var toast = this.toastController.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AdministracionPage.prototype.agregarItem = function () {
        var _this = this;
        console.log("item", this.item);
        this.itemServiceProvider.agregarItem(this.item).subscribe(function (x) {
            if (x.includes('true')) {
                _this.showToast("Item agregado satisfactoriamente");
            }
            else {
                _this.showToast("El item ya está agregado");
            }
        });
        this.item = '';
    };
    AdministracionPage.prototype.acercarCarnet = function () {
        var alert = this.alertCtrl.create({
            title: 'Aviso',
            subTitle: 'Acerque el carné al lector por favor',
            buttons: ['OK']
        });
        alert.present();
    };
    AdministracionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administracion',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Teoria_Conmutacion/prestamos_control_digital/src/pages/administracion/administracion.html"*/`<ion-content padding>\n\n\n  <h1 text-center>\n    Agregar item\n  </h1>\n\n  <ion-item>\n    <ion-label fixed color="dark">Item</ion-label>\n    <ion-input type="text" [(ngModel)]="item"></ion-input>\n  </ion-item>\n\n  <button ion-button round color="secondary" (click)="agregarItem()" class="btn_item">\n    Agregar item\n  </button>\n\n  <button ion-button round color="secondary" (click)="acercarCarnet()" class="btn_actualizar">\n    Actualizar información\n  </button>\n\n  <h1 text-center class="lbl_actualizarinfo">\n    Actualizar información\n  </h1>\n\n  <ion-list class="lista_izq">\n\n    <ion-item>\n      <ion-label fixed color="dark">Nombre</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="dark">Correo</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="dark">Código</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="dark">Celular</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list class="lista_der">\n\n    <ion-item>\n      <ion-label fixed color="dark">Nombre</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="dark">Correo</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="dark">Código</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="dark">Celular</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  {{ item }}\n\n  <button ion-button round color="secondary" class="btn_guardar">\n    Guardar\n  </button>\n\n  <button ion-button round color="danger" (click)="volverInicio()" class="btn_salir">\n    Salir\n  </button>\n\n</ion-content>`/*ion-inline-end:"/home/josh/Documentos/U.SlV/Teoria_Conmutacion/prestamos_control_digital/src/pages/administracion/administracion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_item_service_item_service__["a" /* ItemServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AdministracionPage);
    return AdministracionPage;
}());

//# sourceMappingURL=administracion.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestamoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_item_service_item_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrestamoPage = (function () {
    function PrestamoPage(navCtrl, navParams, itemServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemServiceProvider = itemServiceProvider;
        this.itemSeleccionado = [];
        this.itemsParaDevolver = [];
        this.codigoC = '';
        this.listaDeItems = [];
        this.dic = {};
        this.usuario = this.navParams.get('usuario');
        this.codigoC = this.usuario[3];
        this.traerItem();
        this.traerItemsPersona();
    }
    PrestamoPage_1 = PrestamoPage;
    PrestamoPage.prototype.machetear = function () {
        this.agregarItemUsuario();
        this.agregarItemUsuario();
    };
    PrestamoPage.prototype.elregresodelmachete = function () {
        this.devolver();
        this.devolver();
    };
    PrestamoPage.prototype.devolver = function () {
        this.itemServiceProvider.devolverItemsPersona(this.codigoC, this.itemsParaDevolver).subscribe();
        this.itemsParaDevolver = [];
        this.navCtrl.setRoot(PrestamoPage_1, { usuario: this.usuario });
    };
    PrestamoPage.prototype.traerItem = function () {
        this.items = this.itemServiceProvider.traerItems();
    };
    PrestamoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrestamoPage');
    };
    PrestamoPage.prototype.agregarItemUsuario = function () {
        this.itemServiceProvider.agregarItemsUsuario(this.codigoC, this.itemSeleccionado).subscribe();
        this.itemSeleccionado = [];
        this.navCtrl.setRoot(PrestamoPage_1, { usuario: this.usuario });
    };
    PrestamoPage.prototype.traerItemsPersona = function () {
        this.itemsPersona = this.itemServiceProvider.traerItemsPersona(this.codigoC);
        //this.itemsPersona[0]
    };
    PrestamoPage.prototype.agregarCarrito = function (item) {
        console.log("carrito", item);
        console.log("Dic: ", this.dic);
        if (this.chequearSiEsta(this.itemSeleccionado, item)) {
            console.log("entro agg carrito");
            this.itemSeleccionado.splice(this.itemSeleccionado.indexOf(item), 1);
        }
        else {
            this.itemSeleccionado.push(item);
        }
        ;
        console.log(this.itemSeleccionado, "agregar carrito");
    };
    PrestamoPage.prototype.chequearSiEsta = function (arreglo, item) {
        for (var i = 0; i < arreglo.length; i++) {
            if (arreglo[i] == item) {
                return true;
            }
            return false;
        }
    };
    PrestamoPage.prototype.devolverItem = function ($) {
        var item = $[0];
        console.log("tienda", item);
        console.log("Dic: ", this.dic);
        if (this.chequearSiEsta(this.itemsParaDevolver, item)) {
            console.log("kajshdkjashdakjsd");
            this.itemsParaDevolver.splice(this.itemsParaDevolver.indexOf(item), 1);
        }
        else {
            this.itemsParaDevolver.push(item);
        }
        ;
        console.log(this.itemsParaDevolver, "devolver item");
    };
    PrestamoPage = PrestamoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prestamo',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Teoria_Conmutacion/prestamos_control_digital/src/pages/prestamo/prestamo.html"*/`<ion-content padding>\n  <!-- {{ usuario }}\n  {{ codigoC }} -->\n  <ion-list class="list_compra">\n\n    <h1>\n      Carrito\n    </h1>\n\n\n      <ion-item *ngFor="let item of itemsPersona |  async" >\n        <ion-label>{{ item[0]  }}      {{  item[1] }}</ion-label>\n        <ion-checkbox  (click)="devolverItem(item)"> </ion-checkbox>\n      </ion-item>\n      <button ion-button round color="secondary" (click)="elregresodelmachete()">\n        Devolver\n      </button>\n\n      <button ion-button round color="secondary" (click)="devolver()">\n        Devolver todo\n      </button>\n\n      \n  \n\n  </ion-list>\n\n  <ion-list class="list_inventario">\n\n    <h1>\n      Tienda\n    </h1>\n\n    <!-- <ion-select [(ngModel)]="toppings" multiple="true">\n      <ion-option>\n        {{ item.nombre }}\n      </ion-option>\n    </ion-select> -->\n\n    <ion-item *ngFor="let item of items |  async" >\n      <ion-label>{{ item.nombre }}</ion-label>\n      <ion-checkbox (click)="agregarCarrito(item.nombre)"></ion-checkbox>\n    </ion-item>\n    <button ion-button round color="secondary" (click)="machetear()">\n      Prestar\n    </button>\n    <!-- {{ item.checked }} -->\n    <!-- <ion-item *ngFor="let item of items |  async">\n      <ion-select > -->\n    <!-- <ion-option [(ngModel)]="toppings" multiple="true"> -->\n    <!-- {{ item.nombre }}\n        <! </ion-option> -->\n    <!-- </ion-select>\n    </ion-item>  -->\n\n  </ion-list>\n\n  <!-- {{ itemscheck }} -->\n\n</ion-content>`/*ion-inline-end:"/home/josh/Documentos/U.SlV/Teoria_Conmutacion/prestamos_control_digital/src/pages/prestamo/prestamo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_item_service_item_service__["a" /* ItemServiceProvider */]])
    ], PrestamoPage);
    return PrestamoPage;
    var PrestamoPage_1;
}());

//# sourceMappingURL=prestamo.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/administracion/administracion.module": [
		279,
		1
	],
	"../pages/prestamo/prestamo.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provider_settings_provider_settings__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginServicesProvider = (function () {
    function LoginServicesProvider(http, providerSettingsProvider) {
        this.http = http;
        this.providerSettingsProvider = providerSettingsProvider;
        this.apiUrl = this.providerSettingsProvider.getApiUrl();
    }
    LoginServicesProvider.prototype.verificarUsuario = function (usuario, contrasena) {
        console.log('usuario srvice', usuario);
        console.log('contrasena srvice', contrasena);
        return this.http.post(this.apiUrl + 'administracion', { 'usuario': usuario, 'contrasena': contrasena }).
            map(function (response) { return response.text(); });
    };
    LoginServicesProvider.prototype.direccionarPaginaInicio = function () {
        console.log("aca estamoloco");
        return this.http.get(this.apiUrl + 'obtenerCodigo').
            map(function (response) { return response.json(); });
    };
    LoginServicesProvider.prototype.direccionarPagina = function () {
        var x = this.apiUrl + 'obtenerCodigo';
        console.log("api", x);
        return this.http.get(this.apiUrl + 'obtenerCodigo').map(function (response) { return response.json(); });
    };
    LoginServicesProvider.prototype.hacerRegistro = function (nombre, correo, codigoE, celular, codigoC) {
        return this.http.post(this.apiUrl + 'usuario', { 'nombre': nombre, 'correo': correo, 'codigoE': codigoE, 'codigoC': codigoC, 'celular': celular }).
            map(function (response) { return response.json(); });
    };
    LoginServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_provider_settings_provider_settings__["a" /* ProviderSettingsProvider */]])
    ], LoginServicesProvider);
    return LoginServicesProvider;
}());

//# sourceMappingURL=login-services.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_administracion_administracion__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_prestamo_prestamo__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_login_services_login_services__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_provider_settings_provider_settings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_item_service_item_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_registro_service_registro_service__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_administracion_administracion__["a" /* AdministracionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_prestamo_prestamo__["a" /* PrestamoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/administracion/administracion.module#AdministracionPageModule', name: 'AdministracionPage', segment: 'administracion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prestamo/prestamo.module#PrestamoPageModule', name: 'PrestamoPage', segment: 'prestamo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_administracion_administracion__["a" /* AdministracionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_prestamo_prestamo__["a" /* PrestamoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_login_services_login_services__["a" /* LoginServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_provider_settings_provider_settings__["a" /* ProviderSettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_item_service_item_service__["a" /* ItemServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_registro_service_registro_service__["a" /* RegistroServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__["a" /* InicioPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Teoria_Conmutacion/prestamos_control_digital/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/home/josh/Documentos/U.SlV/Teoria_Conmutacion/prestamos_control_digital/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_settings_provider_settings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistroServiceProvider = (function () {
    function RegistroServiceProvider(http, providerSettingsProvider) {
        this.http = http;
        this.providerSettingsProvider = providerSettingsProvider;
        this.apiUrl = this.providerSettingsProvider.getApiUrl();
    }
    RegistroServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__provider_settings_provider_settings__["a" /* ProviderSettingsProvider */]])
    ], RegistroServiceProvider);
    return RegistroServiceProvider;
}());

//# sourceMappingURL=registro-service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CONFIG = {
    apiUrl: 'http://localhost:5000/'
};
var ProviderSettingsProvider = (function () {
    function ProviderSettingsProvider() {
    }
    ProviderSettingsProvider.prototype.getApiUrl = function () {
        return CONFIG.apiUrl;
    };
    ProviderSettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProviderSettingsProvider);
    return ProviderSettingsProvider;
}());

//# sourceMappingURL=provider-settings.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_administracion_administracion__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_services_login_services__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prestamo_prestamo__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InicioPage = (function () {
    function InicioPage(navCtrl, alertCtrl, loginServicesProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loginServicesProvider = loginServicesProvider;
    }
    InicioPage.prototype.verificar = function (usuario, contrasena) {
        var _this = this;
        console.log('usuario', usuario);
        console.log('contra', contrasena);
        this.admini = this.loginServicesProvider.verificarUsuario(usuario, contrasena);
        console.log('usuario', usuario);
        this.admini.subscribe(function (x) {
            if (x.includes("true")) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_administracion_administracion__["a" /* AdministracionPage */]);
            }
            else {
                console.log('Error');
            }
        });
    };
    InicioPage.prototype.mostrarIngreso = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ingresar',
                    handler: function (data) {
                        console.log(typeof (data.usuario));
                        _this.verificar(data.usuario, data.contrasena);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    InicioPage.prototype.acercarCarnet = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Aviso',
            subTitle: 'Por favor acerque su carné al lector',
        });
        alert.present();
        this.loginServicesProvider.direccionarPagina().subscribe(function (x) {
            var estado = x.status;
            if (estado.includes('true')) {
                console.log('Estamos en prestamos');
                alert.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__prestamo_prestamo__["a" /* PrestamoPage */], { usuario: x.result });
            }
            else {
                console.log('Estamos en registrar usuario');
                alert.dismiss();
                _this.registrarUsuario(x.codigo);
            }
        });
        //console.log(this.direction)    
    };
    InicioPage.prototype.registrarUsuario = function (codigo) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        _this.loginServicesProvider.hacerRegistro(data.nombre, data.correo, data.codigo, data.celular, codigo).subscribe();
                        console.log('Guardar clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    // Método provisional
    InicioPage.prototype.prestarItem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__prestamo_prestamo__["a" /* PrestamoPage */]);
        this.direction = this.loginServicesProvider.direccionarPagina().subscribe();
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Teoria_Conmutacion/prestamos_control_digital/src/pages/inicio/inicio.html"*/`<ion-content padding class="contenido">\n  <button ion-button round color="secondary" (click)="mostrarIngreso()" class="btn_administracion">\n    <ion-icon name="contacts">\n    </ion-icon>\n    Administración\n  </button>\n\n  <button ion-button round color="secondary" (click)="acercarCarnet()" class="btn_prestar">\n    <ion-icon name="ios-basket-outline">\n    </ion-icon>\n    Prestar\n  </button>\n\n  <button ion-button round color="secondary" (click)="prestarItem()">\n    prestarrrr\n  </button>\n\n</ion-content>`/*ion-inline-end:"/home/josh/Documentos/U.SlV/Teoria_Conmutacion/prestamos_control_digital/src/pages/inicio/inicio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_services_login_services__["a" /* LoginServicesProvider */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_settings_provider_settings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemServiceProvider = (function () {
    function ItemServiceProvider(http, providerSettingsProvider) {
        this.http = http;
        this.providerSettingsProvider = providerSettingsProvider;
        this.apiUrl = this.providerSettingsProvider.getApiUrl();
    }
    ItemServiceProvider.prototype.agregarItem = function (nombre) {
        return this.http.post(this.apiUrl + 'item', { 'nombre': nombre }).
            map(function (response) { return response.text(); });
    };
    ItemServiceProvider.prototype.traerItems = function () {
        return this.http.get(this.apiUrl + 'items').map(function (response) { return response.json().result; });
    };
    ItemServiceProvider.prototype.agregarItemsUsuario = function (codigoC, listaItems) {
        return this.http.post(this.apiUrl + 'addItemUser', { 'codigoC': codigoC, 'items': listaItems }).
            map(function (response) { return response.json().result; });
    };
    ItemServiceProvider.prototype.traerItemsPersona = function (codigoC) {
        return this.http.get(this.apiUrl + 'itemPorPersona?codigoC=' + codigoC).map(function (response) { return response.json().result; });
    };
    ItemServiceProvider.prototype.devolverItemsPersona = function (codigoC, listaItems) {
        return this.http.post(this.apiUrl + 'devolver', { 'codigoC': codigoC, 'cosas': listaItems }).
            map(function (response) { return response.json().result; });
    };
    ItemServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__provider_settings_provider_settings__["a" /* ProviderSettingsProvider */]])
    ], ItemServiceProvider);
    return ItemServiceProvider;
}());

//# sourceMappingURL=item-service.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map