'use client'
import Link from 'next/link';
 
export function Flink({ children, path, onClick }: { children: React.ReactNode, path: string, onClick: () => void }) {
  return (
    <Link href={path} onClick={onClick}>{children}</Link>
  )
}