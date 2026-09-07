export type TStrapiImage = {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
};

export type TStrapiLogo = {
  id: number;
  label: string;
  href: string;
  isExternal: boolean;
  image: TStrapiImage;
};

export type TNavItem = {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
  isButtonLink: boolean;
  type: string | null;
  children: TNavItem[];
};

export type TCtaButton = TNavItem & {
  type: 'primary' | 'secondary' | string;
};

export type TAddressParagraph = {
  type: 'paragraph';
  children: Array<{
    type: 'text';
    text: string;
  }>;
};

export type TFooterColumn = {
  id: number;
  title: string;
  links: TNavItem[];
};

export type THeaderData = {
  id: number;
  logo: TStrapiLogo;
  navItems: TNavItem[];
  cta: TCtaButton;
};

export type TFooterData = {
  id: number;
  copyrightText: string;
  address: TAddressParagraph[];
  navLinks: TNavItem[];
  socialLinks: TNavItem[];
  logo: TStrapiLogo[];
  bottomLinks: TNavItem[];
  column: TFooterColumn[];
};

export type TPageLink = Pick<TNavItem, 'id' | 'href' | 'label' | 'isExternal' | 'isButtonLink' | 'type'>;

export type THeroBlock = {
  id: number;
  heading01: string;
  heading02: string;
  text: string;
  primary_image: TStrapiImage | null;
  secondary_image: TStrapiImage | null;
  links: TPageLink[];
  __component: 'blocks.hero';
};

export type TThinkingBlock = {
  id: number;
  title: string;
  description: string | null;
  fullDescription: string | null;
  link: TPageLink[];
  __component: 'blocks.jak-premyslime-section';
};

export type TProcessCard = {
  id: number;
  heading: string;
  subheading: string;
  description: string;
};

export type TAreaCard = {
  id: number;
  size: 'tall' | 'standard' | 'wide' | string;
  style: 'image-bg' | 'dark-green' | 'white' | 'light-green' | string;
  area: {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    description?: string | null;
  };
};

export type TProjectTag = {
  id: number;
  title: string;
  slug: string;
};

export type TProject = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  short_summary: string;
  start_date: string;
  end_date: string;
  project_status: string | null;
  show_on_homepage: boolean;
  homepage_order: number;
  cover_photo: TStrapiImage | null;
  theme_areas: TProjectTag[];
  target_groups: TProjectTag[];
};

export type TInnovationPlatform = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  purpose: string;
  curren_status: string | null;
  show_on_homepage: boolean;
  homepage_order: number;
  cover_photo: TStrapiImage | null;
  tag_areas: unknown[];
  target_groups: unknown[];
};

export type TCardGridBlock = {
  id: number;
  title: string;
  card_variant: string;
  cards: TProcessCard[];
  areas_cards: TAreaCard[];
  link: TPageLink | null;
  __component: 'blocks.card-grid';
};

export type THeadingSectionBlock = {
  id: number;
  title: string;
  anchror_link: string;
  target: 'projects' | 'platforms' | string;
  card_variant: 'white' | 'dark' | 'green',
  start_date: string,
  end_date: string,
  show_tag_area_filter: boolean;
  show_target_group_filter: boolean;
  show_year_filter: boolean;
  show_status_filter: boolean;
  show_current_activities_filter: boolean;
  articles: unknown[];
  team_members: unknown[];
  projects: TProject[];
  innovation_platforms: TInnovationPlatform[];
  link: TPageLink | null;
  __component: 'blocks.heading-section';
};

export type TLandingBlock =
  | THeroBlock
  | TThinkingBlock
  | TCardGridBlock
  | THeadingSectionBlock;

export type TLandingPage = {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: TLandingBlock[];
};

export type TGlobalAttributes = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  header: THeaderData[];
  footer: TFooterData;
};

export type TPageResponse = {
  data: TLandingPage;
  meta: Record<string, unknown>;
};
