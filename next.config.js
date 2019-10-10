const withSass = require('@zeit/next-sass');

// if (typeof require !== 'undefined') {
//     require.extensions['.css'] = (file) => {}
// }

module.exports = withSass({
    useFileSystemPublicRoutes: true,
    sassLoaderOptions: {
        implementation: require('sass'),
    },
    // devIndicators: {
    //     autoPrerender: false,
    // },
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                use: 'raw-loader'
            }
        );
        return config;
    }
});