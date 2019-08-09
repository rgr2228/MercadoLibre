import { Component } from '@angular/core';
import { Producto } from 'src/app/producto';
import { PRODUCTOS } from 'src/app/lista-producto';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private resultado = null;
  productos = PRODUCTOS;

  constructor(private http:HttpClient) { }

  getProducts(prod){
    this.http.get(`https://api.mercadolibre.com/sites/MCO/search?q=${prod.value}&access_token=APP_USR-1571889202014738-080917-26796bb0455c9b7e05d80cae249deb5f-381239892`)
    .subscribe(
      result=>{
        this.resultado=result;
        console.log(result);
      },
      error=>{
        console.log("Error");
      }
    )
  }

}
