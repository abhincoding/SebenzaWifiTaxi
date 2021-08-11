const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
const PORT = process.env.PORT || 5000
const path = require("path");


app.use(cors());
app.use(express.json()); 

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"client/build")));
}

//Routes
console.log(__dirname);
console.log(path.join(__dirname,"client/build"));


app.post("/taxi",async(req, res) =>{
    try {       
        const newTaxi = await pool.query("INSERT INTO taxi (name,numberplate, routerid,locationzone) VALUES($1,$2,$3,$4) RETURNING * ", [req.body.data.name,req.body.data.numberplate, req.body.data.routerid,req.body.data.locationzone]);
        res.json(newTaxi.rows);        
    } catch (err) {
        console.log(err.message);        
    }
})


app.get("/taxi",async(req, res) =>{
    try {
        const allTaxis= await pool.query("SELECT * FROM taxi ")
        res.json(allTaxis.rows);
    } catch (err) {
        console.error(err.message);
    }
})



app.get("/taxi/:id",async(req, res) =>{
    try {
        const {id} = req.params;
        const Taxis= await pool.query("SELECT * FROM taxi WHERE id = $1",[id]);
        res.json(Taxis.rows);
    } catch (err) {
        console.error(err.message);
    }
})



app.put("/taxi/:id",async(req, res) =>{
    try {
        const {id} = req.params;
      //  const {name} = req.body;
        const updateTaxi= await pool.query("UPDATE taxi SET name = $1,numberplate=$2, routerid=$3, locationzone=$4 WHERE id =$5 RETURNING *",[req.body.data.name,req.body.data.numberplate, req.body.data.routerid,req.body.data.locationzone,id]);
        res.json("Taxi data Updated");
    } catch (err) {
        console.error(err.message);
    }
})



app.delete("/taxi/:id", async(req,res) =>{
    try {
        const {id}= req.params;
        const deleteTaxi= await pool.query("DELETE FROM taxi WHERE id=$1",[id]);
        res.json("Taxi data deleted");
    } catch (err) {
        res.message(err.message);
    }
});



app.get("*",(req,res) =>{
    res.sendFile(path.join(__dirname,"client/build/index.html"));
});

app.listen(PORT, () =>{
    console.log(`server has started on ${PORT}`);
});