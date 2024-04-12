import Image from 'next/image';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

import { DATE_FORMAT } from '@/lib/constants';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card';
import ReadMoreButton from '@/components/read-more-button';
import Tags from '@/components/tags';

export default function Home() {
  return (
    <div>
      {allPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <article key={post._id} className="mb-12">
            <Card>
              {post.image && (
                <div className="relative h-60 w-full">
                  <Link href={post.slug}>
                    <Image
                      className="m-0 w-full rounded-t-lg object-cover"
                      src={post.image}
                      alt={post.title}
                      fill
                    />
                  </Link>
                </div>
              )}
              <CardHeader>
                <CardTitle className="m-0">
                  <Link href={post.slug} className="no-underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="space-x-1 text-xs">
                  <span>{format(parseISO(post.date), DATE_FORMAT)}</span>
                  <span>{` • `}</span>
                  <span>{post.readingTime.text}</span>
                  <span>{` • `}</span>
                  <span>
                    <Link
                      href={`/categories/${encodeURIComponent(post.category.toLowerCase())}`}
                      className="underline underline-offset-2">
                      {post.category}
                    </Link>
                  </span>
                </CardDescription>
              </CardHeader>
              {(post.description || post.tags) && (
                <CardContent>
                  {post.description && <div className="mb-4">{post.description}</div>}
                  {post?.tags && (
                    <>
                      {post.description && <hr className="mb-4" />}
                      <Tags data={post.tags} />
                    </>
                  )}
                </CardContent>
              )}
              <CardFooter>
                <ReadMoreButton href={post.slug} />
              </CardFooter>
            </Card>
          </article>
        ))}
    </div>
  );
}
