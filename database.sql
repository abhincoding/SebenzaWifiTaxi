--CREATE DATABASE sebenza;


CREATE TABLE taxi(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    numberplate VARCHAR(9),
    routerid VARCHAR(50),
    locationzone VARCHAR(20)
);