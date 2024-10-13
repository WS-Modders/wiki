import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/shared/libs/api";
import markdownToHtml from "@/shared/libs/markdownToHtml";
import { Postbody } from "@/shared/ui/postbody";

import { headers } from 'next/headers'

export default async function Post() {
  const post = getPostBySlug("not_found");

  const headersList = headers()
  const referer = headersList.get('referer')

  // Extract the pathname from the referer URL
  const refererPath = referer ? new URL(referer).pathname : '';

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
    <div className="body-tabs">
            <div className="pagetitle" id="tabs_page_title">
              <a href="/" className="parent">Home</a> / <a href={refererPath}>{refererPath}</a>
            </div>
            <ul id="pagelinks">
              <li>
                <a href="/" className="active" title="">
                  <i className="mdi mdi-file"></i> View </a>
              </li>
              <li>
                <a href={`https://github.com/WS-Modders/wiki/edit/main/${post.slug}.md`} className="" title="">
                  <i className="mdi mdi-pencil"></i> Edit </a>
              </li>
              <li>
                <a href={`https://github.com/WS-Modders/wiki/commits/main/${post.slug}.md`} className="" title="">
                  <i className="mdi mdi-history"></i> History </a>
              </li>
            </ul>
        </div>

        <div className="content">
          <div className="content">
            <Postbody content={content} />
          </div>
    </div>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | War Selection Wiki`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}