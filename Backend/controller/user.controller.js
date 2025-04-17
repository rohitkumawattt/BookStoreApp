import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"


// controller for new user OR signup
export const signup  =async (req, res) => {
    try {
        const {fullname,email,password} =req.body;
        const user =await User.findOne({email})

        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        // Hash the password
        const hashPassword = await bcryptjs.hash(password, 10)
        const createdUser = new User({
            fullname:fullname,
            email:email,
            password:hashPassword
        })
        await createdUser.save()
        return res.status(201).json({message:"User created successfully",user:{
            _id:createdUser._id, 
            fullname:createdUser.fullname,
            email:createdUser.email
        }})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error", error: error.message})
    }
};

// controller for existing user OR login

export const login =async (req,res)=>{
    try {
        const {email,password} =req.body;
        const user = await User.findOne({email});
        const isMatch =await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }else{
            return res.status(200).json({message:"Login successful",user:{
                _id:user._id, 
                fullname:user.fullname,
                email:user.email
            }})

        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server error",error:error.message})
    }
}
