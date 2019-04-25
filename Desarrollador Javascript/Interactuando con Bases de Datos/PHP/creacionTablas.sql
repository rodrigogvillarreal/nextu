
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
	fechaInicio datetime NOT NULL,
	horaInicio datetime NULL,
	fechaFinalizacion datetime NULL,
	horaFinalizacion datetime NULL,
	diaCompleto boolean NOT NULL,
	PRIMARY KEY (id)
);

