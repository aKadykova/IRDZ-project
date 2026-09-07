import type { Core } from '@strapi/strapi';

export default (_config: Record<string, unknown>, _context: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    ctx.query ??= {};

    const imageFields = { fields: ['url', 'alternativeText', 'width', 'height'] };
    const linkPopulate = {
      populate: {
        children: {
          populate: { subchildren: true },
        },
      },
    };
    const logoLinkPopulate = { populate: { image: imageFields } };
    const projectFields = [
      'title',
      'slug',
      'short_summary',
      'start_date',
      'end_date',
      'project_status',
      'show_on_homepage',
      'homepage_order',
    ];
    const platformFields = [
      'title',
      'slug',
      'purpose',
      'curren_status',
      'show_on_homepage',
      'homepage_order',
    ];
    const requestPath = ctx.path.split('?')[0];
    const isGlobalRequest = requestPath === '/api/global';
    const isBlocksRequest = ['/api/page', '/api/landing-page'].some(
      (path) => requestPath === path || requestPath.startsWith(`${path}/`),
    );
    const layoutPopulate = {
      header: {
        populate: {
          logo: logoLinkPopulate,
          navItems: linkPopulate,
          cta: linkPopulate,
        },
      },
      footer: {
        populate: {
          logo: logoLinkPopulate,
          navLinks: logoLinkPopulate,
          socialLinks: logoLinkPopulate,
          bottomLinks: linkPopulate,
          column: {
            populate: {
              links: linkPopulate,
            },
          },
        },
      },
    };

    const blocksPopulate = {
      on: {
        'blocks.hero': {
          fields: ['heading01', 'heading02', 'text'],
          populate: {
            links: linkPopulate,
            primary_image: imageFields,
            secondary_image: imageFields,
          },
        },
        'blocks.jak-premyslime-section': {
          fields: ['title', 'description', 'fullDescription'],
          populate: { link: linkPopulate },
        },
        'blocks.card-grid': {
          fields: ['title', 'card_variant'],
          populate: {
            areas_cards: {
              populate: { area: { fields: ['title', 'slug', 'description'] } },
            },
            cards: { fields: ['heading', 'subheading', 'description'] },
            link: linkPopulate,
          },
        },
        'blocks.heading-section': {
          fields: [
            'title',
            'anchror_link',
            'target',
            'card_variant',
            'show_tag_area_filter',
            'show_target_group_filter',
            'show_year_filter',
            'show_status_filter',
            'show_current_activities_filter',
          ],
          populate: {
            link: linkPopulate,
            projects: {
              fields: projectFields,
              populate: {
                cover_photo: imageFields,
                theme_areas: { fields: ['title', 'slug'] },
                target_groups: { fields: ['title', 'slug'] },
              },
            },
            innovation_platforms: {
              fields: platformFields,
              populate: {
                cover_photo: imageFields,
                tag_areas: { fields: ['title', 'slug'] },
                target_groups: { fields: ['title', 'slug'] },
              },
            },
            articles: {
              fields: ['title', 'slug', 'publicationDate', 'introduction', 'showOnHomepage'],
              populate: { previewImage: imageFields },
            },
            team_members: {
              fields: [
                'fullName',
                'profileSlug',
                'jobTitle',
                'academicTitle',
                'showOnHomepage',
                'homepageOrder',
              ],
              populate: { photo: imageFields },
            },
          },
        },
      },
    };

    ctx.query.populate = {
      ...(typeof ctx.query.populate === 'object' && !Array.isArray(ctx.query.populate)
        ? ctx.query.populate
        : {}),
      ...(isGlobalRequest ? layoutPopulate : {}),
      ...(isBlocksRequest ? { blocks: blocksPopulate } : {}),
    };

    await next();
  };
};
