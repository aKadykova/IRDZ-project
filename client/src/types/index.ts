// --- Дрібні допоміжні типи ---

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

// --- Основні блоки Layout (Header & Footer) ---

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

// --- Головна сутність Global ---

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

