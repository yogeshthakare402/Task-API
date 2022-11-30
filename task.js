const express = require("express");
const router = express.Router();
const Tasks = require("./models/tasks");
const bodyParser = require("body-parser")

router.use(bodyParser.json());

//post tone task
router.post("/", async(req,res)=>{
    try{
        // console.log(req.body)
        let task = await Tasks.create({
            title : req.body.title,
            is_completed : req.body.is_completed
        })
        res.status(201).json({
            status:"Success",
            task
        })

    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});


//get all tasks
router.get("/", async(req,res)=>{
    try {
        console.log("I am in get all")
        // console.log(res)
        let addedTask =await Tasks.find();
        // console.log(addedTask);
        // console.log(res)
        res.status(200).json({
                addedTask
            })
        
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }

})

//get one taks
router.get("/:id", async(req,res)=>{
    try {
        console.log("I am in get with id")
        let task = await Tasks.findOne({_id:req.params.id});
        if(task){
            res.status(200).json({
                status:"Success",
                task
            })
        }else{
            res.status(404).json({
                message: "There is no task at that id"
            })
        }
        
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }

})

//delete one task
router.delete("/:id", async(req,res)=>{
    try {
        console.log("I am in")
        let task = await Tasks.findOne({_id:req.params.id});
        if(task){
            task.deleteOne()
            .then(
                res.json({
                    status:"Success",
                    messege: "task is deleted"
                })
            )
        }else{
            res.status(204).json({
                message: "There is no task at that id"
            })
        }
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }

})
//update one taks
router.put("/:id", async(req,res)=>{
    try {
        console.log("I am in")
        let task = await Tasks.findOne({_id:req.params.id});
        if(task){
            task.updateOne({
                title : req.body.title,
                is_completed : req.body.is_completed
            })
            .then(res.status(204))
        }else{
            res.status(404).json({
                message: "There is no task at that id"
            })
        }
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }

});

//post many tasks
router.post("/", async(req,res)=>{
    try{
        // console.log(req.body)
        let tasks = await Tasks.insertMany(
            [{
            title : req.body.title,
            is_completed : req.body.is_completed
        }]
        )
        res.status(201).json({
            status:"Success",
            tasks
        })

    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});


//delete many tasks
// router.deleteMany("/", async(req,res)=>{
//     try{
//         // console.log(req.body)
//         let tasks = await Tasks.deleteMany(
            
//         )
//         res.status(201).json({
//             status:"Success",
//             tasks
//         })

//     }catch(e){
//         res.status(500).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// });


module.exports=router