/**
 * Login Router Module
 * /login/*
 */
const express = require('express')
const passport = require('passport')
const router = express.Router()

/**
 * /login
 */
router.post('/', function (req, res, next) {
	passport.authenticate('local-login', function (err, user, info) {
		if (err) res.status(500).json(err) // 에러를 json으로 응답 주기
		if (!user) return res.json({ code: info.code, err: info.msg }) // 유저가 없을 때에도 json으로 응답 주기

		req.logIn(user, function (err) {
			if (err) {
				return res.status(500).json(err)
			}

			return res.json({
				code: 'S',
				redirect_url: '/',
				user: req.user
			})
		})
	})(req, res, next)
})

router.get('/', (req, res, next) => {
	console.log('welcome login get')
	if (!req.isAuthenticated()) {
		console.log('have to log in')
		next()
	} else {
		console.log('login success')
		// res.redirect('/biz/cmpn/list')
		next()
	}
})

module.exports = router
