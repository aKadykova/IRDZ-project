import type { Core } from '@strapi/strapi';

const projectFields = [
  'title',
  'slug',
  'shortSummary',
  'startDate',
  'endDate',
  'theme_areas',
  'target_groups',
  'showOnHomepage',
  'homepageOrder',
] as const;

const pickProjectFields = (project: Record<string, unknown>) =>
  Object.fromEntries(projectFields.map((field) => [field, project[field]]));

export default (_config: Record<string, unknown>, _context: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    ctx.query ??= {};
    ctx.query.populate = {
      ...(typeof ctx.query.populate === 'object' ? ctx.query.populate : {}),
      theme_areas: true,
      target_groups: true,
    };

    await next();

    if (!ctx.body?.data) {
      return;
    }

    ctx.body.data = Array.isArray(ctx.body.data)
      ? ctx.body.data.map(pickProjectFields)
      : pickProjectFields(ctx.body.data);
  };
};