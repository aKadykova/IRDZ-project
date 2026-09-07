import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    displayName: 'Card grid';
    icon: 'clock';
  };
  attributes: {
    areas_cards: Schema.Attribute.Component<'shared.area-card', true>;
    card_variant: Schema.Attribute.Enumeration<['default', 'target area ']> &
      Schema.Attribute.Required;
    cards: Schema.Attribute.Component<'shared.card', true>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksHeadingSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heading_sections';
  info: {
    displayName: 'Listing Section';
  };
  attributes: {
    anchror_link: Schema.Attribute.String & Schema.Attribute.Required;
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    card_variant: Schema.Attribute.Enumeration<['white', 'dark', 'green']> &
      Schema.Attribute.DefaultTo<'dark'>;
    innovation_platforms: Schema.Attribute.Relation<
      'oneToMany',
      'api::innovation-platform.innovation-platform'
    >;
    link: Schema.Attribute.Component<'shared.link', false>;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    selection_mode_platforms: Schema.Attribute.Enumeration<
      ['all', 'latest', 'manual']
    > &
      Schema.Attribute.Required;
    selection_mode_projects: Schema.Attribute.Enumeration<
      ['all', 'latest', 'manual']
    > &
      Schema.Attribute.Required;
    show_current_activities_filter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    show_status_filter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    show_tag_area_filter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    show_target_group_filter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    show_year_filter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    target: Schema.Attribute.Enumeration<
      ['articles', 'events', 'projects', 'platforms', 'team members']
    > &
      Schema.Attribute.Required;
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading01: Schema.Attribute.String;
    heading02: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
    primary_image: Schema.Attribute.Media<'images'>;
    secondary_image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksJakPremyslimeSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_jak_premyslime_sections';
  info: {
    displayName: 'Title Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    fullDescription: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {};
}

export interface LayoutColumnFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_column_footers';
  info: {
    displayName: 'columnFooter';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    address: Schema.Attribute.Blocks;
    bottomLinks: Schema.Attribute.Component<'shared.link', true>;
    column: Schema.Attribute.Component<'layout.column-footer', true>;
    copyrightText: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'shared.logo-link', true>;
    navLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedAreaCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_area_cards';
  info: {
    displayName: 'Area Card';
  };
  attributes: {
    area: Schema.Attribute.Relation<'oneToOne', 'api::tag-area.tag-area'>;
    size: Schema.Attribute.Enumeration<['standard', 'tall', 'wide']>;
    style: Schema.Attribute.Enumeration<
      ['dark-green', 'light-green', 'white', 'image-bg']
    >;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    children: Schema.Attribute.Component<'shared.sublink', true>;
    href: Schema.Attribute.Text;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedSublink extends Struct.ComponentSchema {
  collectionName: 'components_shared_sublinks';
  info: {
    displayName: 'Sublink';
  };
  attributes: {
    href: Schema.Attribute.Text;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    subchildren: Schema.Attribute.Component<'shared.sublink-child', true>;
  };
}

export interface SharedSublinkChild extends Struct.ComponentSchema {
  collectionName: 'components_shared_sublink_children';
  info: {
    displayName: 'Sublink child';
  };
  attributes: {
    href: Schema.Attribute.Text;
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blocks.card-grid': BlocksCardGrid;
      'blocks.heading-section': BlocksHeadingSection;
      'blocks.hero': BlocksHero;
      'blocks.jak-premyslime-section': BlocksJakPremyslimeSection;
      'layout.banner': LayoutBanner;
      'layout.column-footer': LayoutColumnFooter;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.area-card': SharedAreaCard;
      'shared.card': SharedCard;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.sublink': SharedSublink;
      'shared.sublink-child': SharedSublinkChild;
    }
  }
}
