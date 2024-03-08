const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

    } catch (error) {
        res.status(500).json({ message: err.message});
        console.log("Error in signupUser: ", err.message);
    }

}