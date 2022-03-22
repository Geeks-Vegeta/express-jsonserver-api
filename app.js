const express = require('express');


const axios = require('axios');

const app = express();


app.use(express.json())

// initial route
app.get("/", (req, res)=>{
    res.json({"message": "This is initial route"})
})


// get all users
app.get("/alluser", async(req, res)=>{
    try {
        const user = await axios.get("http://localhost:3000/user");
        res.json(user.data);
        
    } catch (error) {
        console.log(error)
        
    }

})


// adding new user
app.post("/adduser", async(req, res)=>{

    let {name, id} = req.body;

    try {

        const newuser = await axios.post("http://localhost:3000/user",{
            id:id,
            name:name
        })
        res.status(201).send(newuser.data);
        
    } catch (error) {
        if(error.response.status == 500){
            return res.status(409).json({"message": "this data already exists"})
        }
        
    }
})




// get a single user
app.get("/user/:id", async(req, res)=>{
    
    let { id } = req.params;
    try {

        const user = await axios.get(`http://localhost:3000/user/${id}`);
        res.send(user.data);
        
    } catch (error) {
        if(error.response.status == 404){
            return res.status(404).json({"message": "This user does not exists"});
        }
        
    }
})



// update a single user
app.put("/update/:user_id", async(req, res)=>{

    const {user_id} = req.params;

    try {

        const user = await axios.put(`http://localhost:3000/user/${user_id}`,{
            name:req.body.name
        });
        res.status(200).send(user.data);

        
    } catch (error) {
        console.log(error)
        
    }
})


// delete userby id
app.delete("/delete/:user_id", async(req, res)=>{

    const {user_id} = req.params;

    try {

        await axios.delete(`http://localhost:3000/user/${user_id}`);
        res.status(200).json({"message": "delete successfully"});


    } catch (error) {
        if(error.response.status == 404){
            return res.status(404).json({"message": "this user does not exists"});
        }
        
    }
})


module.exports=app;