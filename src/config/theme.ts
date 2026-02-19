type AccentScale = '50' | '100' | '300' | '400' | '500' | '600' | '700' | '800';
type SecondaryScale = '100' | '200' | '300' | '400' | '500' | '600';

type Palette<T extends string> = Record<T, string>;

export type SiteTheme = {
  accent: Palette<AccentScale>;
  secondary: Palette<SecondaryScale>;
};

// Single source of truth for brand colors.
// Update this file to re-theme the site quickly.
export const siteTheme: SiteTheme = {
  accent: {
    '50': '#f7fee7',
    '100': '#ecfccb',
    '300': '#bef264',
    '400': '#a3e635',
    '500': '#84cc16',
    '600': '#65a30d',
    '700': '#4d7c0f',
    '800': '#3f6212'
  },
  secondary: {
    '100': '#fce7f3',
    '200': '#fbcfe8',
    '300': '#f9a8d4',
    '400': '#f472b6',
    '500': '#ec4899',
    '600': '#db2777'
  }
};

export function getThemeCssVariables(theme: SiteTheme = siteTheme): Record<string, string> {
  const vars: Record<string, string> = {};

  (Object.keys(theme.accent) as AccentScale[]).forEach((step) => {
    vars[`--color-lime-${step}`] = theme.accent[step];
  });

  (Object.keys(theme.secondary) as SecondaryScale[]).forEach((step) => {
    vars[`--color-pink-${step}`] = theme.secondary[step];
  });

  vars['--color-accent'] = theme.accent['400'];
  vars['--color-brand-primary'] = theme.accent['400'];
  vars['--color-brand-secondary'] = theme.secondary['400'];

  return vars;
}
