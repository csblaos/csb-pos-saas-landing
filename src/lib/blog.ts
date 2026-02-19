import { blogConfig } from '../config/blog';

export const BLOG_POSTS_PER_PAGE = blogConfig.postsPerPage;

export function getTotalPages(totalItems: number, perPage: number = BLOG_POSTS_PER_PAGE): number {
  return Math.max(1, Math.ceil(totalItems / perPage));
}

export function paginateItems<T>(
  items: T[],
  page: number,
  perPage: number = BLOG_POSTS_PER_PAGE
): T[] {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
}
