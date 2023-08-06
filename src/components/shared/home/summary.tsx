export const Summary = () => (
  <div>
    <div className="mb-9 mt-[6.875rem] flex flex-col">
      <h5 className="text-[1.75rem] font-medium">Hello, I&apos;m Delanhese,</h5>
      <h1 className="text-7xl font-extrabold sm:w-[38.5rem] sm:text-[6.25rem] sm:leading-[7.25rem]">
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
)
