import jwt from 'jsonwebtoken'
import 'dotenv/config'
export const adminLogin = async(req,res)=>{

 try{
      const email = req.body.email;
       const password = req.body.password;


      if(email!==process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
        return res.json({success:false, message: "Invalid credentials"})
      }
      const token=jwt.sign({email},process.env.JWT_SECRET)
      res.json({success:true, token})

      
 }
 catch(error){
    res.join({success:false, message:error.message});

 }
}