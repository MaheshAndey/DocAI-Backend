const express= require("express");
const userReport=require("../models/userReport");
const{StatusCodes}=require("http-status-codes");


const addreport= async(req,res)=>{
    const task= await userReport.create(req.body);
    res.status(StatusCodes.CREATED).json(task);

}
const getreport=async(req,res)=>{
    try {
       const data= await userReport.find()
        return res.status(StatusCodes.OK).json({data});
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
}
module.exports ={addreport,getreport};