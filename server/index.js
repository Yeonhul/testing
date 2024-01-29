const express = require('express')
const next = require('next')
const consola = require('consola')
const moment = require('moment-timezone')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
const dev = process.env.NODE_ENV !== 'production'
const NEXT = next({ dev })
const handle = NEXT.getRequestHandler()

require('console-stamp')(console, {
	format: ':mydate() :label()',
	tokens: {
		mydate: () => {
			return `[${moment().tz('Asia/Seoul').format('yyyy/MM/DD HH:mm:ss z')}]`
		}
	}
})

// 환경변수 설정
if (process.env.CY_ENV !== undefined) {
	dotenv.config({
		path: path.join(__dirname, `../.env.${process.env.CY_ENV}`)
	})
} else {
	throw new Error('process.env.CY_ENV 설정이 되어있지 않습니다.')
}

// ------------------------------- passport & session  -------------------------------------------

const passport = require('passport')
const passportConfig = require('../server/passport/passport.js')
const session = require('express-session')
passportConfig()

// body parser (express built-in)
app.use(express.json())

// 세션 활성화
app.use(session({ secret: 'next-office', resave: false, saveUninitialized: true, name: process.env.NODE_ENV === 'development' ? 'bosession' : 'connect.sid' }))

// passport 구동
app.use(passport.initialize())

// passport 세션 연결
app.use(passport.session())

// -----------------------------------------------------------------------------------------------

// ------------------------------- router & middleware  ------------------------------------------

const loginRouter = require('./routers/login.routes.js')
app.use('/login', loginRouter)

// -----------------------------------------------------------------------------------------------

NEXT.prepare().then(() => {
	console.log('prcoess ENV SERVER', process.env.API_SERVER)

	app.all('*', (req, res) => {
		return handle(req, res)
	})

	// ------------------------------- router & middleware  ------------------------------------------
	// -----------------------------------------------------------------------------------------------

	const PORT = process.env.PORT || 3131

	app.listen(PORT, err => {
		if (err) {
			consola.error(err)
			process.exit(1)
		}

		consola.success(`Server is running on http://localhost:${PORT}`)
	})
})
