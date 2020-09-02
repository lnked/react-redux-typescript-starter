import * as React from 'react';

export interface BreadcrumbProps {
  href?: string;
  icon?: string;
  text?: string;
}

export interface OuterProps {
  items?: BreadcrumbProps[];
}

const list: BreadcrumbProps[] = [
  { href: '/users', icon: 'folder-close', text: 'Users' },
  { href: '/users/janet', icon: 'folder-close', text: 'Janet' },
  { icon: 'document', text: 'image.jpg' },
];

export const Breadcrumbs: React.FC<OuterProps> = (props: OuterProps) => {
  return (
    <div>
      {JSON.stringify(props)}
      {JSON.stringify(list)}
    </div>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

Breadcrumbs.defaultProps = {
  items: [],
};
