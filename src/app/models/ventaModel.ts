import { Producto } from "./productoModel";

export interface Venta{
    nroventa: number;
    nombre: string;
    pedido: Producto[];
    total: number;
}