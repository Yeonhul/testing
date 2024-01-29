/** @type {import('next').NextConfig} */
// const Dotenv = require('dotenv-webpack')
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true
	// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
	// 	console.log('webpack : ', process.env.CY_ENV)
	// 	// Note: 설정 파일에서 Dotenv 플러그인을 사용합니다.
	// 	config.plugins.push(new Dotenv({ path: '', silent: true }))
	// 	return config
	// }
}

module.exports = nextConfig
