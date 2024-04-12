import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import ErrorText from './error-text';

const mdxComponents = {
  Image: (props: React.ComponentProps<typeof Image>) => <Image {...props} />,
  ErrorText: (props: React.ComponentProps<typeof ErrorText>) => <ErrorText {...props} />,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code);
  return <MDXContent components={mdxComponents} />;
}
