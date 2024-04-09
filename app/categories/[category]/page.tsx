import Image from 'next/image';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { ChevronLeftSquare } from 'lucide-react';

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

interface PostProps {
  params: {
    category: string;
  };
}

async function getPostsFromParams(params: PostProps['params']) {
  const category = params?.category;
  const posts = allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
  return posts;
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.filter((post) => ({
    category: post.category,
  }));
}

export default async function CategoryPostsPage({ params }: PostProps) {
  const posts = await getPostsFromParams(params);

  return (
    <div className="space-y-12">
      <header className="flex items-center space-x-2">
        <Link href="/">
          <ChevronLeftSquare className="h-6 w-6" />
        </Link>
        <h1 className="text-3xl">
          <span className="font-semibold">{posts[0].category}</span> blog posts
        </h1>
      </header>

      {posts.map((post) => (
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
              </CardDescription>
            </CardHeader>
            {post.description && <CardContent>{post.description}</CardContent>}
            <CardFooter>
              <ReadMoreButton href={post.slug} />
            </CardFooter>
          </Card>
        </article>
      ))}
    </div>
  );
}
