import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {
  Image: (props: React.ComponentProps<typeof Image>) => <Image {...props} />,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code);
  return <MDXContent components={mdxComponents} />;
}
