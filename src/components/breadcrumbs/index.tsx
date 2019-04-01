import * as React from 'react'

interface BreadcrumbProps {
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
]

const Breadcrumbs: React.FC<OuterProps> = (props: OuterProps) => {
  return (
    <div>
      {JSON.stringify(props)}
      {JSON.stringify(list)}
    </div>
  )
}

Breadcrumbs.defaultProps = {
  items: [],
}

export default Breadcrumbs
