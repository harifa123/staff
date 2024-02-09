const mongoose=require("mongoose")
const staffSchema=new mongoose.Schema(
    {
        name:String,
        id:String,
        role:String,
        college:String
    }
)
module.exports=mongoose.model("staff",staffSchema)