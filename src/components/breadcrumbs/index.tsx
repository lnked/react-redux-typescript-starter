import * as React from 'react'

export interface OuterProps {
  type?: string;
  label?: string;
  error?: string;
  value?: string | number | null;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
