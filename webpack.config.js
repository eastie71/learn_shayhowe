// babel allows you to make use of modern ES6 js such as classes, etc,
// while supporting older browsers
module.exports = {
	mode: 'none',
	entry: {
		header: "./app/assets/scripts/header.js",
		app: "./app/assets/scripts/app.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: __dirname + "/app/temp/scripts",
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['env']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}