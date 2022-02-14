'use strict';

/**
 * lab-member service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lab-member.lab-member');
