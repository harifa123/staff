const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const staffRoute=require("./controller/staffRouter")

//aliasname
const app=express()

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://harifa123:harifa123@cluster0.j6vqcp5.mongodb.net/staffDb?retryWrites=true&w=majority",{useNewUrlParser:true})

//routing
app.use("/api/staff",staffRoute)

app.listen(3001,()=>{
    console.log("server running")
})