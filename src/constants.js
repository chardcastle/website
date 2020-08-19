import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();

const myTitle = 'Chris Hardcastle';

module.exports.SITE_TITLE = `${myTitle} - Software Development Engineer`;
module.exports.SITE_DESCRIPTION = `${myTitle} is a Software Development Engineer from the UK`;
module.exports.SITE_AUTHOR = myTitle;

module.exports.OG_TITLE = myTitle;
module.exports.OG_TYPE = 'website';
module.exports.OG_URL = publicRuntimeConfig.siteUrl;
module.exports.OG_IMAGE = `${publicRuntimeConfig.siteUrl}/img/profile.png`;
module.exports.OG_DESCRIPTION = `${myTitle} is a senior software developer from the UK`;
