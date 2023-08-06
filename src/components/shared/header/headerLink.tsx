import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { HeaderLinkProps } from './types/headerLink'

export const HeaderLink = ({
  href,
  children,
  className,
  target = '_self',
}: HeaderLinkProps) => (
  <Link
    href={href}
    passHref
    className={twMerge('flex flex-row', className)}
    target={target}
  >
    {children}
  </Link>
)
