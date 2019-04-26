const express = require('express')
const router = express.Router()
const userRegistration = require('./../middlewares/userRegistration')
const userLogin = require('./../middlewares/userLogin')
const userPasswordTokenGeneration = require('./../middlewares/userPasswordTokenGeneration')
const userPasswordTokenValidation = require('./../middlewares/userPasswordTokenValidation')
const userPasswordRenew = require('./../middlewares/userPasswordRenew')
const userProfile = require('./../middlewares/userProfile')
const userProfileUpdate = require('./../middlewares/userProfileUpdate')
const userPopular = require('./../middlewares/userPopular')
const userProfilePicture = require('./../middlewares/userProfilePicture')


router.post('/register', userRegistration)
router.post('/login', userLogin)
router.post('/forgot-password', userPasswordTokenGeneration)
router.post('/validate-password-token', userPasswordTokenValidation)
router.put('/new-password', userPasswordRenew)
router.put('/profile', userProfileUpdate)
router.get('/profile/:username', userProfile)
router.get('/popular/:page', userPopular)
router.post('/profile/avatar', userProfilePicture)

module.exports = router