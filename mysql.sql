create DATABASE rpgplayer;
drop database rpgplayer;
show databases;
use rpgplayer;

drop table Usuarios;

CREATE TABLE audios(
  cod_audio int(11) NOT NULL AUTO_INCREMENT,
  nome_audio varchar(45) NOT NULL,
  descricao varchar(200) DEFAULT NULL,
  categoria varchar(200) DEFAULT NULL,
  tipo varchar(200) DEFAULT NULL,
  audio varchar(200) DEFAULT NULL,
  imagem varchar(200) DEFAULT NULL,
  PRIMARY KEY (cod_audio)
)

SELECT * FROM audios;

INSERT INTO Usuarios(nome_usuario,senha ) 
	VALUES('Iann','1234');
    
INSERT INTO Ingressos(cod_hash,entrada,nome,camisa)
	Values('1',0,'','');

    
    SELECT * FROM Ingressos WHERE cod_hash = '5' AND entrada = 1;


SELECT*FROM Usuarios;
SELECT*FROM Ingressos;

DELETE FROM Ingressos;

UPDATE Ingressos SET entrada=1 WHERE cod_ingresso='5';