export class Usuario {
    email:string="";
    username:string="";
    password:string="";
    first_name:string="";
    last_name:string="";
    is_superuser:boolean=false;
    is_staff:boolean=true;
    is_active:boolean=true;
    imagen:string="";
    direccion:string="";
    fechadenacimiento: string | null = null;
    id:number=0;
    token?: string;

    toJSON() {
      return {
        email: this.email,
        username: this.username,
        password: this.password, 
        first_name: this.first_name,
        last_name: this.last_name,
        is_superuser: this.is_superuser,
        is_staff: this.is_staff,
        is_active: this.is_active,
        imagen: this.imagen,
        direccion: this.direccion,
        fechadenacimiento: this.fechadenacimiento,
        id: this.id,
        token: this.token,
      };
    }
  }
  
