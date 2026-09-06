/**
 * project router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::project.project', {
	config: {
		find: {
			middlewares: ['api::project.project-response'],
		},
		findOne: {
			middlewares: ['api::project.project-response'],
		},
	},
});
