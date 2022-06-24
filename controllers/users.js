const router = require('express').Router()

// List of all the users
router.get('/', (req,res) => {
    res.send('just users')
})


// get specific user's information
router.get('/:id', (req,res) => {
    res.send('this is user id')
})



// get the certain pic id information
router.get(':picid', (req,res) => {
    res.send('picture id')
})



// Route where you can leave a comment on a certain image
router.post('/:picid/comment', (req,res) => {
    res.send('picid comment section')
})

// Update the comment that was made
router.put('/:picid/comment/:id', (req,res) => {
    res.send('Updating the comments')
})






module.exports = router