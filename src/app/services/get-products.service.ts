import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  products = [
    { id: 1, name: "Adidas", price: 240.99, description: "zapatillas deportivas", cantidad: 1, marca: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 2, name: "Nike", price: 240.99, description: "zapatillas deportivas", cantidad: 1,marca: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 3, name: "Puma", price: 240.99, description: "zapatillas deportivas", cantidad: 1,marca: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 4, name: "Vans", price: 240.99, description: "zapatillas deportivas", cantidad: 1,marca: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 5, name: "Cheroke", price: 240.99, description: "zapatillas deportivas", cantidad: 1,marca: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 6, name: "North Star", price: 240.99, description: "zapatillas deportivas", cantidad: 1,marca: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 7, name: "Platanitos", price: 240.99, description: "zapatillas deportivas", cantidad: 1,marca: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
    { id: 8, name: "Jhordan", price: 240.99, description: "zapatillas deportivas", cantidad: 1,marca: "Zapatillas", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg" },
  ]
  constructor() { }
  getProductos(){
    return this.products;
  }
  getProductId(id: number) {
    return this.products.find(p => p.id == id)
  }
}
