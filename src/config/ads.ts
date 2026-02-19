export const adsConfig = {
  sidebar: {
    placement: 'blog-sidebar',
    listPageCount: 3,
    detailPageCount: 2,
    weights: {
      normal: 1,
      premium: 3,
      platinum: 6,
    },
    storageKey: '__blog_sidebar_last_ads__',
  },
} as const;

