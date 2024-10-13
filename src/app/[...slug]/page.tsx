import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/shared/libs/api";
import markdownToHtml from "@/shared/libs/markdownToHtml";
import { Postbody } from "@/shared/ui/postbody";

export default async function Post({ params }: Params) {
  const url = `${params.slug[0]}/${params.slug[1]}`
  const post = getPostBySlug(url);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <div className="body-tabs">
        <div className="pagetitle" id="tabs_page_title">
          <a href="/" className="parent">Home</a> / <a href="/">{post.title}</a>
        </div>
        <ul id="pagelinks">
          <li>
            <a href={`/`} className="active" title="">
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
    slug: string[];
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug.join("/"));

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
  };
}