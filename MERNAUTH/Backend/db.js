const mongoose=require('mongoose');

require('dotenv').config();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(
    ()=>{
        console.log("connection succesfull");
    }
)
.catch((err)=>{
    console.log(`could not connect to db ${err}`);
})
