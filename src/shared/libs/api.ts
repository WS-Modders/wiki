import { Post } from "@/entities/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_content");

/**
 * Получает список всех слагов постов из корневой директории и поддиректорий.
 */
export function getPostSlugs() {
  const slugs: string[] = [];

  // Добавляем слаги из корневой директории
  const rootSlugs = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
  rootSlugs.forEach(file => {
    slugs.push(file.replace(/\.md$/, ""));
  });

  // Добавляем слаги из поддиректорий
  const folders = getFolders();
  folders.forEach(folder => {
    const folderPath = join(postsDirectory, folder);
    const folderSlugs = fs.readdirSync(folderPath).filter(file => file.endsWith('.md'));
    folderSlugs.forEach(file => {
      slugs.push(`${folder}/${file.replace(/\.md$/, "")}`);
    });
  });

  return slugs;
}

export function getPostBySlug(slug: string) {
  let realSlug = slug;

  if (slug === "_welcome" || slug === undefined) {
    realSlug = slug;
  } else {
    realSlug = slug.replace(/\.md$/, ""); // Удаляем расширение .md
  }

  const fullPath = join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const title = data.title;
  const sub = data.sub;
  const category = data.category;
  const show = data.show;
  const func = data.func;
  const icon = data.icon;

  return { title, slug: realSlug, content, sub, category, show, func, icon } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && post.show !== "Not")

  return posts;
}

export function getFolders(): string[] {
  return fs.readdirSync(postsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}
