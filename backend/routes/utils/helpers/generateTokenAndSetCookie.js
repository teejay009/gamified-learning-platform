import { Jwt } from "jsonwebtoken";

const generateTokenAndSetCookies = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET {
        expiresIn: '15d',
    })

    res.cookies("jwt", token, {
        httpOnly: true, // This cookies can not be accessed by the browser. more secure
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        sameSite:"strict"
    })

    return cookies

}

export default getTokenAndSetCookies;