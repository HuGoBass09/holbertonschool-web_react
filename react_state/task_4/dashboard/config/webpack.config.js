const path = require('path');

module.exports = {
    mode: 'development',
    entry: '../dashboard/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets',
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Résoudre les extensions .js et .jsx
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        hot: true,
        open: true, // Ouvrir automatiquement le navigateur
        historyApiFallback: true,
    },
};
