//REQUERIMOS DOTENV PARA TENER VARIABLES DE ENTORNO
require("dotenv").config();

//REQUERIMOPS EXPRESS
const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");

//REQUERIMOS SESSION
const session = require('express-session');

//EJECUTAMOS EXPRESS
const app = express();

// REQUERIMOS PATH Y STATIC PARA LAS RUTAS
const { join } = require("path");
const { static } = require("express");

//SETEAMOS APP PARA Q MIRE DIRECTAMENTE LAS VISTAS EN VIEWS
app.set("view engine", "ejs");
app.set("views", join(__dirname, "./views"));

// USAMOS STATIC Y JOIN PARA QUE TODO LO QUE AGREGEMOS AL HTML SE REDIRIJA A PUBLIC AUTOMATICAMENTE, Y ASI ACORTAR LAS RUTAS
app.use(static(join(__dirname, "../public")));

// configuramos express para recibir y parsear peticiones HTTP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));

// EJECUTAMOS SESSION
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'secret',    
}));


//REQUERIMOS EL ROUTEADOR PRINCIPAL
const mainRouter = require("./routers/main-router");

//MONTAMOS MAIN ROUTER
app.use(mainRouter);

//EXPORTAMOS APP
module.exports = app