const express = require("express");
const mongoose = require("mongoose");

const users = require("./MOCK_DATA.json");
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/app01")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Could not connect to MongoDB", err));

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: false }, 
    email: { type: String, required: true, unique: true },
    age: { type: Number }
});


const userModel = mongoose.model("User", UserSchema);

app.use(express.urlencoded({ extended: false }));



app.get("/api/users", (req, res) =>{
    return res.json(users);
})
 
app.get("/api/users/:id", (req, res) =>{    
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    if(user){
        return res.json(user);
    }
    return res.status(404).send("User not found");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 