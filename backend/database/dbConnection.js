import mongoose from 'mongoose';

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGOATLAS_URL, {
        dbName: "restaurant"
    }).then(()=>{
        console.log("Connected to DB succesfully ")
    }).catch(err =>{
        console.log("Some error occured");
    })
}