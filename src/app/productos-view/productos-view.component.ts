import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.css']
})
export class ProductosViewComponent {
misProductos:any;

constructor(private adminProductos:ProductosService){
  this.misProductos=this.adminProductos.getProductos()
}


verificarCalidadPrecio(productoFiltrar:any){
  return this.adminProductos.verificarCalidadPrecio(productoFiltrar)
}


  
      

  
  

}
