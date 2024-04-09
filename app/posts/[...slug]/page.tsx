import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

import { DATE_FORMAT } from '@/lib/constants';
import { Mdx } from '@/components/mdx-components';
import Tags from '@/components/tags';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert">
      {post.image && (
        <div className="relative mb-12 h-[345px] w-full">
          <Image
            className="m-0 w-full rounded-lg object-cover"
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <header>
        <h1 className="mb-2">{post.title}</h1>
        {post.description && (
          <p className="mb-6 mt-0 text-xl text-gray-700 dark:text-gray-200">{post.description}</p>
        )}
        <p className="space-x-1 text-xs text-gray-500">
          <span>{format(parseISO(post.date), DATE_FORMAT)}</span>
          <span>{` • `}</span>
          <span>{post.readingTime.text}</span>
          <span>{` • `}</span>
          <span>
            <Link href={`/categories/${encodeURIComponent(post.category.toLowerCase())}`}>
              {post.category}
            </Link>
          </span>
        </p>
      </header>
      {post?.tags && <Tags data={post.tags} />}
      <hr className="my-6" />
      <Mdx code={post.body.code} />
    </article>
  );
}
