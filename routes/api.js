// Any routes that are going to exposed to REST API end users as well as the EMM portal
const express = require('express')
const router = express.Router()

const sampleController = require('../controllers/sampleController')
const userController = require('../controllers/userController')

const jwtAuth = require('../middleware/jwtAuth')

router.get('/test', sampleController.testRoute)

// POST the user's login info to log the user in
router.post('/login', userController.login)

// Middleware
router.use(jwtAuth.verifyToken)

// Verify that the given token is valid
router.get('/verify-auth', userController.verifyAuth)

// Allow the user to update their password
router.put('/pass', userController.changePassword)

module.exports = router
