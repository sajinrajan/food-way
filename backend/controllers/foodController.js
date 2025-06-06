// import foodModel from "../models/foodModel.js";
// import fs from 'fs'

// //add food item
// const addFood = async (req,res) =>{
//         let image_filename = `${req.file.filename}`

//         const food =new foodModel({
//             name:req.body.name,
//             description:req.body.description,
//             price:req.body.price,
//             category:req.body.category,
//             image:image_filename
//         })
//         try{
//             await food.save();
//             res.json({success:true,message:"Food Added"})
//         } catch (error) {
//             console.log(error);
//             res.json({success:false,message:"Error"})
            
//         }
// }

// export {addFood}

import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food item
const addFood = async (req, res) => {
    try {
        // Check if image was uploaded
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }

        const { name, description, price, category } = req.body;

        // Basic validation
        if (!name || !description || !price || !category) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: req.file.filename
        });

        await food.save();
        res.status(201).json({ success: true, message: "Food item added successfully" });

    } catch (error) {
        console.error("Error adding food item:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { addFood };
