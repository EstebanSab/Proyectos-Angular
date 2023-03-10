import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ProductosViewComponent } from './productos-view/productos-view.component';
import { ProductoComponent } from './producto/producto.component';
import { MiCarritoViewComponent } from './mi-carrito-view/mi-carrito-view.component';
import { FiltroProductosComponent } from './filtro-productos/filtro-productos.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { VenderProductoComponent } from './vender-producto/vender-producto.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosViewComponent,
    ProductoComponent,
    MiCarritoViewComponent,
    FiltroProductosComponent,
    LoginViewComponent,
    VenderProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
