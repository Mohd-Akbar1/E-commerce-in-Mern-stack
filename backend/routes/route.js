const express=require('express')
const Cloth = require('../DB/Model')
const router=express.Router()

// get all data
router.get('/',async(req,res)=>{
    const data=await Cloth.find({})
    if(data) return res.json(data)
    return res.json('Error in fetching data')
})

// get data fro search
router.get('/:query',async(req,res)=>{
    const inputValue = req.params.query; 
const query = {
  $or: [
    { name: inputValue },
    { category: inputValue },
    { description: inputValue }
  ]
}
  const data=await Cloth.find(query)
  return res.json(data)
});





module.exports=router;