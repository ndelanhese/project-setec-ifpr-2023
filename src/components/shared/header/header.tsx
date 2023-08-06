import Link from 'next/link'
import { Github, Instagram, Twitter } from 'lucide-react'
import { HeaderLink } from './headerLink'

export const Header = () => (
  <div className="flex w-full flex-row items-center justify-between">
    <HeaderLink href="/" className="text-2xl font-bold">
      Delanhese
    </HeaderLink>
    <div className="flex flex-row gap-16 text-xl">
      <HeaderLink href="/">home</HeaderLink>
      <HeaderLink href="/about">about</HeaderLink>
      <HeaderLink href="/work">work</HeaderLink>
    </div>
    <div className="flex flex-row gap-10">
      <HeaderLink href="https://twitter.com/DelanheseNathan/" target="_blank">
        <Twitter />
      </HeaderLink>
      <HeaderLink
        href="https://www.instagram.com/nathan.delanhese/"
        target="_blank"
      >
        <Instagram />
      </HeaderLink>
      <HeaderLink href="https://twitter.com/DelanheseNathan" target="_blank">
        <Github />
      </HeaderLink>
    </div>
  </div>
)
