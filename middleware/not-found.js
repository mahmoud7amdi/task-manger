const notFound = (req,res)=> res.status(404).send('route does not exsist')
module.exports = notFound