import { DecimalPipe } from "@angular/common";

export class Producto {
    fechaActual: Date = new Date();

    codigo:string="";
    nombre:string="";
    descripcion:string="";
    inventariominimo:number=0;
    preciodecosto:number=0; 
    preciodeventa:number=0; 
    activoactualmente:boolean=true;
    imagen:string="";
    estado:string="A"
    fechaalta:Date=this.fechaActual;
    categoria:number=0;
    usuarioalta_id:number=0;
    id:number=0;
  }


  