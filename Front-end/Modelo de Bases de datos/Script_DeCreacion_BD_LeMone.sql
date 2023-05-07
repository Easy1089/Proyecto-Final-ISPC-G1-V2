DROP DATABASE IF EXISTS LeMone;
CREATE DATABASE LeMone CHARACTER SET utf8mb4;
USE LeMone;

CREATE TABLE Categorias (
    Id INT auto_increment not null,
    Nombre VARCHAR(50) NOT NULL,
    Descripcion VARCHAR(150) NOT NULL,
    ActivoActualmente bit,
    PRIMARY KEY(Id)
);

CREATE TABLE Productos (
    Id INT auto_increment not null,
    Codigo nvarchar(20) not null,
    Nombre nvarchar(50) not null,
    Descripcion nvarchar(250) not null,
    InventarioMinimo INT,
    PrecioDeCosto decimal(17, 2),
    PrecioDeVenta decimal(17, 2),
    IdCategoria INT,
    ActivoActualmente bit,
    Estado char(1) NOT NULL default 'A',
	FechaAlta datetime NOT NULL,
    IdUsuarioDeAlta INT NOT NULL,
	FechaModificacion datetime NULL,
	IdUsuarioModificacion INT NULL,
	FechaBaja datetime NULL,
    IdUsuarioDeBaja INT NULL,
    PRIMARY KEY(Id)
);

CREATE TABLE TiposDePersonas (
    Id INT not null,
    Nombre nvarchar(50) not null,
    PRIMARY KEY(Id)
);

CREATE TABLE Provincias (
    Id INT not null,
    Nombre nvarchar(50) not null,
	ActivoActualmente bit not null default 1,
    PRIMARY KEY(Id)
);

CREATE TABLE Localidades (
    Id INT not null,
    Nombre nvarchar(50) not null,
    IdProvincia int,
	ActivoActualmente bit not null default 1,
    PRIMARY KEY(Id)
);

CREATE TABLE Personas (
    Id INT auto_increment not null,
    Apellido nvarchar(50) not null,
    Nombre nvarchar(50) not null,
    Telefono numeric null,
    Email nvarchar(50) null,
    IdTipoDePersona Int,
    ActivoActualmente bit not null default 1,
    Estado char(1) NOT NULL default 'A',
	FechaAlta datetime NOT NULL,
    IdUsuarioDeAlta INT NOT NULL,
	FechaModificacion datetime NULL,
	IdUsuarioModificacion INT NULL,
    PRIMARY KEY(Id)
);

CREATE TABLE Personas_Domicilios (
    Id INT auto_increment not null,
    IdPersona Int,
    Domicilio_Calle nvarchar(100),
    Domicilio_Numero int null,
    Domicilio_Piso nvarchar(10) null,
    Docimilio_Departamento nvarchar(10) null,
    Domicilio_IdLocalidad int null,
    Domicilio_IdProvincia int null,
    Domicilio_CP nvarchar(10),
    ActivoActualmente bit not null default 1,
    PorDefecto bit,
    Estado char(1) NOT NULL default 'A',
	FechaAlta datetime NOT NULL,
    IdUsuarioDeAlta INT NOT NULL,
	FechaModificacion datetime NULL,
	IdUsuarioModificacion INT NULL,
    PRIMARY KEY(Id)
);

CREATE TABLE TiposDeOperacion (
    Id INT not null,
    Nombre nvarchar(50) not null,
    PRIMARY KEY(Id)
);

CREATE TABLE Operaciones (
    Id INT auto_increment not null,
    IdPersona int,
    IdTipoDeOperacion int,
    IdProducto int,
	Cantidad decimal(17, 2),    
    Estado char(1) NOT NULL default 'A',
	FechaAlta datetime NOT NULL,
    IdUsuarioDeAlta INT NOT NULL,
	FechaBaja datetime NULL,
    IdUsuarioDeBaja INT NULL,
    PRIMARY KEY(Id)
);

CREATE TABLE MediosDePago (
    Id INT auto_increment not null,
    Nombre nvarchar(50) not null,
	ActivoActualmente bit not null default 1,
    PRIMARY KEY(Id)
);

CREATE TABLE TiposDeEnvios (
    Id INT auto_increment not null,
    Nombre nvarchar(50) null,
	ActivoActualmente bit not null default 1,
    PRIMARY KEY(Id)
);

CREATE TABLE TiposDeDescuentos (
    Id INT auto_increment not null,
    Nombre nvarchar(50) null,
    Descripcion  nvarchar(50) null,
	ActivoActualmente bit not null default 1,
    PRIMARY KEY(Id)
);

CREATE TABLE EstadosDeOrdenes (
    Id INT auto_increment not null,
    Nombre nvarchar(50) null,
    PRIMARY KEY(Id)
);

CREATE TABLE Ordenes (
    Id INT auto_increment not null,
    IdEstadoDeOrden int not null,
    NroDeOrden int not null,    
    NroTransaccion int not null,    
    IdPersona int,
    IdPersona_Domicilio int,
    IdMedioDePago int,
    IdTipoDeEnvio int,
    IdTipoDeDescuento int,
    ImporteNeto decimal(17, 4),
    ImporteIVA decimal(17, 4),
    ImporteTotal decimal(17, 4),
    Observaciones nvarchar(200) null,
    Estado char(1) NOT NULL default 'A',
	FechaAlta datetime NOT NULL,
    IdUsuarioDeAlta INT NOT NULL,
    PRIMARY KEY(Id)
);

CREATE TABLE Ordenes_Detalle (
    Id INT auto_increment not null,
    IdOrden int not null,
	IdProducto int,
	Cantidad decimal(17, 2),    
    Observaciones nvarchar(200) null,
    Estado char(1) NOT NULL default 'A',
	FechaAlta datetime NOT NULL,
    IdUsuarioDeAlta INT NOT NULL,
	FechaBaja datetime NULL,
    IdUsuarioDeBaja INT NULL,
    PRIMARY KEY(Id)
);

CREATE TABLE TiposDeUsuarios (
    Id INT not null,
    Nombre nvarchar(50) not null,
    PRIMARY KEY(Id)
);

CREATE TABLE Usuarios (
    Id INT auto_increment not null,
    IdTipoDeUsuario int not null,
    IdPersona int not null,
    NombreDeUsuario nvarchar(50) not null,
    Password nvarchar(50) not null,
    ActivoActualmente bit not null default 1,
    Estado char(1) NOT NULL default 'A',
	FechaAlta datetime NOT NULL,
    IdUsuarioDeAlta INT NULL,
	FechaModificacion datetime NULL,
	IdUsuarioModificacion INT NULL,
    PRIMARY KEY(Id)
);

ALTER TABLE Usuarios ADD FOREIGN KEY(IdTipoDeUsuario) REFERENCES TiposDeUsuarios(Id);
ALTER TABLE Usuarios ADD FOREIGN KEY(IdUsuarioDeAlta) REFERENCES Usuarios(Id);
ALTER TABLE Usuarios ADD FOREIGN KEY(IdPersona) REFERENCES Personas(Id);
ALTER TABLE Operaciones ADD FOREIGN KEY(IdProducto) REFERENCES Productos(Id);
ALTER TABLE Operaciones ADD FOREIGN KEY(IdTipoDeOperacion) REFERENCES TiposDeOperacion(Id);
ALTER TABLE Operaciones ADD FOREIGN KEY(IdPersona) REFERENCES Personas(Id);
ALTER TABLE Operaciones ADD FOREIGN KEY(IdUsuarioDeAlta) REFERENCES Usuarios(Id);
ALTER TABLE Productos ADD FOREIGN KEY(IdCategoria) REFERENCES Categorias(Id);
ALTER TABLE Productos ADD FOREIGN KEY(IdUsuarioDeAlta) REFERENCES Usuarios(Id);
ALTER TABLE Personas ADD FOREIGN KEY(IdTipoDePersona) REFERENCES TiposDePersonas(Id);
ALTER TABLE Personas_Domicilios ADD FOREIGN KEY(IdPersona) REFERENCES Personas(Id);
ALTER TABLE Personas_Domicilios ADD FOREIGN KEY(Domicilio_IdLocalidad) REFERENCES Localidades(Id);
ALTER TABLE Personas_Domicilios ADD FOREIGN KEY(Domicilio_IdProvincia) REFERENCES Provincias(Id);
ALTER TABLE Personas_Domicilios ADD FOREIGN KEY(IdUsuarioDeAlta) REFERENCES Usuarios(Id);
ALTER TABLE Localidades ADD FOREIGN KEY(IdProvincia) REFERENCES Provincias(Id);
ALTER TABLE Ordenes ADD FOREIGN KEY(IdEstadoDeOrden) REFERENCES EstadosDeOrdenes(Id);
ALTER TABLE Ordenes ADD FOREIGN KEY(IdPersona) REFERENCES Personas(Id);
ALTER TABLE Ordenes ADD FOREIGN KEY(IdMedioDePago) REFERENCES MediosDePago(Id);
ALTER TABLE Ordenes ADD FOREIGN KEY(IdTipoDeEnvio) REFERENCES TiposDeEnvios(Id);
ALTER TABLE Ordenes ADD FOREIGN KEY(IdTipoDeDescuento) REFERENCES TiposDeDescuentos(Id);
ALTER TABLE Ordenes ADD FOREIGN KEY(IdPersona_Domicilio) REFERENCES Personas_Domicilios(Id);
ALTER TABLE Ordenes ADD FOREIGN KEY(IdUsuarioDeAlta) REFERENCES Usuarios(Id);
ALTER TABLE Ordenes_Detalle ADD FOREIGN KEY(IdOrden) REFERENCES Ordenes(Id);
ALTER TABLE Ordenes_Detalle ADD FOREIGN KEY(IdProducto) REFERENCES Productos(Id);
ALTER TABLE Ordenes_Detalle ADD FOREIGN KEY(IdUsuarioDeAlta) REFERENCES Usuarios(Id);