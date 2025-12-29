const express = require("express")
const mongooes = require("mongoose")
mongooes.connect("mongodb+srv://mianhuzaifaali62_db_user:uhM7bnOU4uSsa05n@cluster0.66jyhgo.mongodb.net/")
.then(()=>{
    console.log("Connected")
})
.catch(()=>{
    console.log("Not connected to Database")
})