const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',
    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'),  // 웹팩 환경설정은 Node.js 기반이기 때문에 절대경로로 설정해준다. (default: {절대경로}/dist)
        // filename: 'main.js',
        clean: true // 기존 빌드 경로 초기화 옵션
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',  // 순서4 (순서 중요) : style-loader - html style 태그에서 사용 할 수 있도록 해주는 패키지
                    'css-loader',    // 순서3 : css-loader - 자바스크립트가 CSS파일을 해석 할 수 있도록 해주는 패키지
                    'postcss-loader',   // 순서2
                    'sass-loader'   // 순서1
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플로그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({    // 정적 파일 연결
            patterns: [
                {from: 'static'}
            ]
        })
    ],
    
    devServer: {
        host: 'localhost'
    }
};
