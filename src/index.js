const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose= require("mongoose");
const dotenv=require("dotenv");
const cors =require("cors");
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);
app.get("/", (req, res) =>{
res.send("NotesApi");
});

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGOURL)
.then(()=>{
app.listen (port, ()=>{
console.log("Server started on port no. "+port);
});

})
.catch((error) => {
console.log(error);
})

//