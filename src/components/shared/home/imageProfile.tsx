import { Circle } from '@components/icons/circle'
import { Slash } from '@components/icons/slash'
import { Stars } from '@components/icons/stars'
import Image from 'next/image'

export const ImageProfile = () => (
  <div className="relative h-[31.25rem] w-96 max-w-[100dvw] sm:w-[31.25rem]">
    <Stars className="absolute right-0 top-8 sm:top-0" />
    <Circle className="w-96 sm:w-auto" />
    <Slash className="absolute bottom-[6.25rem]" />
    <Image
      src="https://github.com/ndelanhese.png"
      alt="image profile from github profile by Nathan Delanhese"
      width={450}
      height={450}
      className="absolute left-6 top-24 -z-10 w-80 rounded-full sm:top-8 sm:w-auto"
    />
  </div>
)
