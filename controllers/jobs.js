

const getAllJobs = (req,res)=>{
    res.send('Get All Jobs')
}

const getJob = (req,res)=>{
    res.send('Get Job')
}

const createJob = (req,res)=>{
    res.json(req.user)
}

const updateJob = (req,res)=>{
    res.send('Update Job')
}

const deleteJob = (req,res)=>{
    res.send('Delete Job')
}

module.exports = {getAllJobs, getJob, createJob, updateJob, deleteJob}