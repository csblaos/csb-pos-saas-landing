# Blog Publishing Guide

This is the easiest workflow to publish a new blog post in this project.

## 1) Create a new file from template

Run:

```bash
cp docs/templates/blog-post-template.md src/content/news/your-slug-name.md
```

Slug rules:

- use lowercase
- use hyphen `-` between words
- keep it short and descriptive

Example:

- `src/content/news/how-to-reduce-cod-returns.md`

## 2) Update frontmatter

Required fields:

- `title`
- `description`
- `pubDate` (YYYY-MM-DD)
- `tags` (array)

Recommended:

- `author`
- `image` (real image URL, minimum width around 1200px)

## 3) Write article content

Recommended structure:

- problem statement
- step-by-step solution
- checklist/KPI
- summary and next action

Keep paragraphs short for mobile readability.

## 4) Validate locally

Run:

```bash
npm run build
```

Then check:

- blog list page: `/{lang}/blog`
- blog detail page: `/{lang}/blog/{slug}`

## 5) Publishing checklist

- date is correct
- title is clear and searchable
- image loads properly
- no placeholder text left
- spelling and numbers verified

## Content style recommendation (best for growth)

- publish 1 to 2 practical posts per week
- focus on real operational problems
- use numbers when possible (time saved, error reduction, SLA)
- keep one clear call-to-action at the end of each post
