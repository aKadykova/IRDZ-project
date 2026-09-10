/**
 * project router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::project.project', {
	config: {
		find: {
			middlewares: ['global::content-response'],
		},
		findOne: {
			middlewares: ['api::project.project-response'],
		},
	},
});
