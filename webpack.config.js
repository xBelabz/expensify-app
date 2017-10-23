// Entry point -> Output path
const path = require('path');

// Extract text plugin for webpack
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* -------------------------------------------------------------------------
   - Exporting a function
------------------------------------------------------------------------- */
module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: CSSExtract.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}

						]
					})
				}
			]
		},
		plugins: [
			CSSExtract
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true
		}
	}
};

/* -------------------------------------------------------------------------
   - Exporting an object
------------------------------------------------------------------------- */
// module.exports = {
// 	entry: './src/app.js',
// 	output: {
// 		path: path.join(__dirname, 'public'),
// 		filename: 'bundle.js'
// 	},
// 	module: {
// 		rules: [
// 			{
// 				loader: 'babel-loader',
// 				test: /\.js$/,
// 				exclude: /node_modules/
// 			},
// 			{
// 				use: [
// 					'style-loader',
// 					'css-loader',
// 					'sass-loader'
// 				],
// 				test: /\.s?css$/
//
// 			}
// 		]
// 	},
// 	devtool: 'cheap-module-eval-source-map',
// 	devServer: {
// 		contentBase: path.join(__dirname, 'public'),
// 		historyApiFallback: true
// 	}
// };
