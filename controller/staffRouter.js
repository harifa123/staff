const express=require("express")
const staffmodel=require("../model/staffModel")
const router=express.Router()



router.post("/add",async(req,res)=>{
    let data=req.body//value reading
    let staff=new staffmodel(data)
    let result=await staff.save()

    res.json({status:"success"})
})



module.exports=router