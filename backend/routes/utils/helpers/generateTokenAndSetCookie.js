import { Jwt } from "jsonwebtoken";

const generateTokenAndSetCookies = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET {
        expiresIn: '15d',
    })

    res.cookies("jwt", token, {
        httpOnly: true, // This cookies can not be accessed by the browser. more secure
        maxAge: 15
    })

}

export default getTokenAndSetCookies;