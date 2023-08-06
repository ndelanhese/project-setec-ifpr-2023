import { Circle } from '@/components/icons/circle'
import { Slash } from '@/components/icons/slash'
import { Stars } from '@/components/icons/stars'
import Image from 'next/image'

const Home = () => (
  <main className="px-24 py-8">
    <div className="flex flex-row justify-between pt-[7.5rem]">
      <div>
        <div className="mb-9 mt-[6.875rem] flex flex-col">
          <h5 className="text-[1.75rem] font-medium">Hello, I’m Delanhese,</h5>
          <h1 className="w-[38.5rem] text-[100px] font-extrabold leading-[116px]">
            Software Engineer
          </h1>
          <p className="text-[28px] font-medium">based in Brazil.</p>
        </div>
        <div className="group relative max-w-fit transition-transform">
          <button className="rounded-lg border border-lime-900 px-8 py-2 text-xl">
            Resume
          </button>
          <div className="absolute top-2 -z-10 ml-2 h-[50px] w-[8.75rem] rounded-md bg-yellow group-hover:top-0 group-hover:ml-0"></div>
        </div>
      </div>
      <div className="relative h-[31.25rem] w-[31.25rem]">
        <Stars className="absolute right-0" />
        <Circle />
        <Slash className="absolute bottom-[6.25rem]" />
        {/* <Image
          src="https://github.com/ndelanhese.png"
          alt="image profile from github profile by Nathan Delanhese"
          width={500}
          height={500}
          className="absolute left-0 top-0 -z-10"
        /> */}
      </div>
    </div>
  </main>
)

export default Home
