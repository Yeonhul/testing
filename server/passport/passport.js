const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const Member = require('../models').Member

module.exports = () => {
	passport.serializeUser((user, done) => {
		done(null, user)
	})

	passport.deserializeUser((user, done) => {
		done(null, user)
	})

	passport.use(
		'local-login',
		new LocalStrategy(
			{
				usernameField: 'username',
				passwordField: 'password',
				session: true,
				passReqToCallback: true
			},
			(req, id, pwd, done) => {
				// cos admin 확인 >> 해당회원의 아이디 뒤에 '___cosadm' 추가
				// cos admin일 경우 amdin 비밀번호로 로그인 가능
				let checkid = id.split('___')
				let isCosAdm = false
				if (checkid.length === 2 && checkid[1] === 'cosadm') {
					console.log('----------------')
					console.log('cos admin')
					isCosAdm = true
					console.log('----------------')
				}
				Member.findOne({
					// 일반회원일 경우
					// 회사코드가 PT010으로 고정 >> 회사정보 없음.
					// attributes: {
					// 	include: [
					// 		[
					// 			//회사명
					// 			Member.sequelize.literal(
					// 				`(select tncm.cmpn_nm from t_npd2_cmp_info as tncm where tncm.cmpn_cd = 'PT010')`
					// 			),
					// 			'company_nm'
					// 		]
					// 	]
					// },
					where: {
						mbr_id: checkid[0],
						cmpn_cd: 'BO001' // 회사코드
					}
				})
					.then(member => {
						console.log(member)
						const memInfo = {}
						//memInfo.company_nm = member.get('company_nm') // 회사명
						memInfo.company_cd = member.cmpn_cd
						memInfo.mbr_id = member.mbr_id
						memInfo.init_pwd_yn = member.init_pwd_yn
						// memInfo.mbr_pwd = member.mbr_pwd
						memInfo.mbr_nm = member.mbr_nm
						memInfo.mbr_email = member.mbr_email
						memInfo.mbr_se = member.mbr_se
						memInfo.ogn_nm = member.ogn_nm
						memInfo.positn = member.positn
						memInfo.job = member.job
						memInfo.mbr_tel = member.mbr_tel
						memInfo.authz = member.authz
						memInfo.tems_yn = member.tems_yn
						memInfo.prsn_yn = member.prsn_yn
						memInfo.email_chck_yn = member.email_chck_yn
						memInfo.del_yn = member.del_yn

						if (!isCosAdm) {
							// 일반회원
							memInfo.cosadm = false
							bcrypt.compare(pwd, member.mbr_pwd, (err, res) => {
								if (res) {
									// 임시 비밀번호 생성
									if (member.init_pwd_yn === 'Y') {
										return done(null, false, {
											code: 'INITPWD',
											msg: ''
										})
									}

									if (member.apv_yn == 'Y') {
										return done(null, memInfo)
									} else {
										return done(null, false, {
											code: 'F',
											msg: '승인절차가 완료되지 않았습니다. 관리자에게 문의해 주세요.'
										})
									}
								} else {
									return done(null, false, {
										code: 'F',
										msg: '비밀번호를 확인해주세요.'
									})
								}
							})
						} else {
							// cos admin
							if (pwd === 'Tldhkdlcos2021@@') {
								memInfo.cosadm = true
								return done(null, memInfo)
							} else {
								return done(null, false, {
									code: 'F',
									msg: '비밀번호를 확인해주세요.'
								})
							}
						}
					})
					.catch(e => {
						console.log(e)
						return done(null, false, {
							code: 'F',
							msg: '아이디를 확인해주세요.'
						})
					})
			}
		)
	)
}
