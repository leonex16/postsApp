const esLocale = require('date-fns/locale/es');
const formatDistanceToNowStrict = require('date-fns/formatDistanceToNowStrict');
const formatDistanceToNowStrictOpt = { addSuffix: false, locale: esLocale };

const dateFormat = posts => {
	return posts.map(post => ({
		...post,
		create_date: formatDistanceToNowStrict(
			post.create_date,
			formatDistanceToNowStrictOpt,
		),
	}));
};

module.exports = dateFormat;
