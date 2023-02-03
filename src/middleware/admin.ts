export const adminAuth = (req, res, next) =>{
    if (req.decode.roles === 'admin') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}