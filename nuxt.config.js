import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

export default {
    mode: 'spa',
    head: {
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [{ src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js' }],
    },

    /**
     * css预编译
     */
    css: [
        'swiper/dist/css/swiper.css',
        { src: '~assets/scss/basic.scss', lang: 'scss' },
        { src: '~assets/scss/index_cn.scss', lang: 'scss' },
        // { src: '~assets/icons/iconfont.css' },
        // { src: '~assets/scss/main.scss', lang: 'scss' }, // 指定 scss 而非 sass
    ],

    /**
     * 使用到的插件
     */
    plugins: [
        '~/plugins/axios',
        { src: '~/plugins/swiper.js', ssr: false },
    ],

    /**
     * 代理模块axios
     */
    modules: [
        '@nuxtjs/axios',
        // 'bootstrap-vue/nuxt',
        // ['bootstrap-vue/nuxt', { css: false }],
    ],
    axios: {
        proxy: true,
    },
    proxy: {
        '/api': 'http://api.example.com',
        '/api2': 'http://api.another-website.com',
    },

    /**
     * 添加scssloader
     */
    loaders: [{
        test: /\.(sass|scss)$/,
        loaders: ['style', 'css', 'scss'],
    }, ],
    build: {
        publicPath: '/testdemo/',
        analyze: false,
        extends(config, { isDev, isClient, isServer }) {
            if (isClient && !isDev) {
                config.plugins.push(
                    new UglifyJSPlugin({
                        uglifyOptions: {
                            compress: {
                                warnings: false,
                                drop_debugger: true,
                                drop_console: true,
                            },
                        },
                    }),
                );
            }

            if (isServer) {
                config.externals = [
                    nodeExternals({
                        // `whitelist` 选项的默认值是
                        // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
                        whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-echarts/],
                    }),
                ];
            }
        },
    },
    serverMiddleware: ['~/mockapi'],
};