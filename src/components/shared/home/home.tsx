import { ImageProfile } from './imageProfile'
import { Summary } from './summary'

export const Home = () => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:pt-[7.5rem]">
    <Summary />
    <ImageProfile />
  </div>
)
