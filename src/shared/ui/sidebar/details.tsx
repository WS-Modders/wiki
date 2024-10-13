'use client'
import { usePathname } from 'next/navigation'
import { Post } from '@/entities/post';
import Link from 'next/link';
 
export function Details({ children, path, posts }: { children: React.ReactNode, path: string, posts: Post[] }) {
  const pathname = usePathname()
  const post = posts.find(post => post.slug === path)
  return (
    <>
      <details open={pathname === post?.slug} className="level1">
        {children}
        <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/${post.slug}`} className={pathname === `/${post.slug}` ? 'code active' : ''}>
                {post.func ? <i className="mdi mdi-function" style={{ marginRight: '5px' }}></i> : null}
                {post.title}
                </Link>
              </li>
            ))}
        </ul>
      </details>
    </>
  )
}
