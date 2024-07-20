--CREATE DATABASE test;
--USE test;


CREATE TABLE projects (
  idProject INT IDENTITY(1,1) PRIMARY KEY,
  nameProject NVARCHAR(255) NOT NULL,
  user1 NVARCHAR(255) NOT NULL,
  user2 NVARCHAR(255),
  description NVARCHAR(255)
);

--DROP TABLE BitacoraCambio;
CREATE TABLE BitacoraCambio (
  idCambio INT IDENTITY(1,1) PRIMARY KEY,
  idProject INT NOT NULL,
  userUpdate NVARCHAR(255) NOT NULL,
  updateDate DATETIME NOT NULL,
  routeUpdate NVARCHAR(255),
  contadorCambios SMALLINT,
  CONSTRAINT FK_BitacoraCambio_projects FOREIGN KEY (idProject) REFERENCES projects(idProject)
);


--insert into projects values ('test1', 'user1','user2','projecto de prueba')
--insert into BitacoraCambio values (1,'user1',getDate(), 'descripcion',1)

select * from projects 
select * from BitacoraCambio 