const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')

const getAllJobs = (req,res)=>{
    res.send('Get All Jobs')
}

const getJob = (req,res)=>{
    res.send('Get Job')
}

const createJob = (req,res)=>{
    res.json(req.body)
}

const updateJob = (req,res)=>{
    res.send('Update Job')
}

const deleteJob = (req,res)=>{
    res.send('Delete Job')
}

module.exports = {getAllJobs, getJob, createJob, updateJob, deleteJob}