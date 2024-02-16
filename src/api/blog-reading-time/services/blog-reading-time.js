'use strict';

/**
 * blog-reading-time service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-reading-time.blog-reading-time');
