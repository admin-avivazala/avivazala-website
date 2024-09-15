import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock
} from 'next-sanity';
import SanityImage from './SanityImage';

export default function SanityContent({
  className,
  value
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h4: ({ children }) => <h4 className="mb-2 font-semibold">{children}</h4>
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        );
      }
    },
    types: {
      image: (props) => <SanityImage {...props} />
    }
  };

  return (
    <div className={['prose', className].filter(Boolean).join(' ')}>
      <PortableText components={components} value={value} />
    </div>
  );
}
