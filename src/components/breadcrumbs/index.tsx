import * as React from 'react'

export interface OuterProps {
  items?: any[];
}

const list: OuterProps[] = [
  { href: "/users", icon: "folder-close", text: "Users" },
  { href: "/users/janet", icon: "folder-close", text: "Janet" },
  { icon: "document", text: "image.jpg" },
];

const Breadcrumbs: React.FC<OuterProps> = (props: OuterProps) => {
  return (
    <div>
      {JSON.stringify(props)}
      {JSON.stringify(list)}
    </div>
  )
}

Breadcrumbs.defaultProps = {
  type: 'text',
  label: '',
  error: '',
  value: '',
}

export default Breadcrumbs
