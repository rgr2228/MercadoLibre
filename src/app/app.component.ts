import { Component } from '@angular/core';
import { Producto } from 'src/app/producto';
import { PRODUCTOS } from 'src/app/lista-producto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  productos = PRODUCTOS;
}
