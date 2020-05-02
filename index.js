const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 5000;

const PROJECT_LIST= require("./projects.js");

app.listen(PORT, ()=> {
	console.log(`Running on Port ${PORT}.`);
});

app.get("/", (req,res)=>{
	return res.send(PROJECT_LIST);
});

