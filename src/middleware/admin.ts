export const adminAuth = (req, res, next) =>{
    console.log(req.decoded.role)
    if (req.decoded.role === 'admin') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}