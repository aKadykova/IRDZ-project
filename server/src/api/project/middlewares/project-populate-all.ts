import type { Core } from '@strapi/strapi';
const projectFields = [
  'title',
  'slug',
  'short_summary',
  'start_date',
  'end_date',
  'theme_areas',
  'target_groups',
  'showOnHomepage',
  'homepageOrder',
  'objective',
  'phases',
  'results',
  'description',
  'initial_situation',
  'ways_to_get_involved',
  'team_members',
  'public_contact'
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
      team_members: {
        fields: ['fullName', 'profileSlug', 'jobTitle'],
        populate: { photo: { fields: ['url', 'alternativeText', 'width', 'height'] } },
      },
      public_contact: {
        fields: ['fullName', 'profileSlug', 'jobTitle', 'email'],
        populate: { photo: { fields: ['url', 'alternativeText', 'width', 'height'] } },
      },
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
