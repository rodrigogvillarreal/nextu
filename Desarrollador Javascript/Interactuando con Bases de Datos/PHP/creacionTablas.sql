
Create Table Usuarios(
	email varchar(255) NOT NULL UNIQUE,
	nombreUsuario varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	nombreCompleto varchar(255) NULL,
	fechaNacimiento datetime NULL,
	PRIMARY KEY (email)
);

Create Table Eventos(
	id int(11) NOT NULL AUTO_INCREMENT,
	titulo varchar(255) NOT NULL,
	fechaInicio date NOT NULL,
	horaInicio time NULL,
	fechaFinalizacion date NULL,
	horaFinalizacion time NULL,
	diaCompleto boolean NOT NULL,
	nombreUsuario varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

