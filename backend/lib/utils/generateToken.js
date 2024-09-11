// import jsonwebtoken from "jsonwebtoken"; 
import jwt from 'jsonwebtoken'


export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '15d'
    })

    //third bracket is added to make it more secure
    res.cookie("jwt", token,{
        maxAge : 15*24*60*60*1000, //millisecons
        httpOnly : true,           //prevent xss attack, cross-site scripting attacks
        sameSite : "strict",       //prevent CSRF attacks
        secure : process.env.NODE_ENV !== "development",
    })
}