import { Github, Instagram, Twitter } from 'lucide-react'
import { HeaderLink } from './headerLink'
import { HeaderWrapper } from './headerWrapper'

export const Header = () => (
  <HeaderWrapper>
    <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between sm:px-24 sm:py-8">
      <HeaderLink href="/" className="text-3xl font-bold sm:text-2xl">
        Delanhese
      </HeaderLink>
      <div className="flex flex-col gap-6 text-xl sm:flex-row sm:gap-16">
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
  </HeaderWrapper>
)
