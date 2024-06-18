create database db_estacionamento;
use db_estacionamento;

create table tbl_carro(
	id         int     AUTO_INCREMENT  NOT NULL,
    modelo     varchar(100)  NOT NULL,
    marca      varchar(100)  NOT NULL,
    ano        int           NOT NULL,
    placa      varchar(8)    NOT NULL,
    cor        varchar(20)   NOT NULL,
    qtdPortas  int           NOT NULL,
    desempenho int           NOT NULL,
    quilometragem int        NOT NULL,
    primary key(id)
)

SELECT * FROM tbl_carro;

create table tbl_cliente(
	id_cliente       int     AUTO_INCREMENT  NOT NULL,
    sexo             varchar(25)             NOT NULL,
    dataNasc		 date                    NOT NULL,
    cnh              int                     NOT NULL,
    endereco         varchar(100)            NOT NULL,
    id_carro         int                     NOT NULL,
    primary key(id_cliente),
    foreign key(id_carro) references tbl_carro(id)
)

SELECT * FROM tbl_cliente;

create table tbl_cadastro(
	id_cadastro      int    AUTO_INCREMENT  NOT NULL,
    id_cliente       int                    NOT NULL,
    data             date                   NOT NULL,
    primary key(id_cadastro), 
    foreign key(id_cliente) references tbl_cliente(id_cliente)
)

SELECT * FROM tbl_cadastro;