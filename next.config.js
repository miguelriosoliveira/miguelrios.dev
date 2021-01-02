const withImages = require('next-images');

module.exports = withImages({
	esModule: true,
	basePath: '/my-site-nextjs',
	assetPrefix: '/my-site-nextjs/',
});
