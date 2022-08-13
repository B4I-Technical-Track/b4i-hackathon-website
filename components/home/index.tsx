import type { NextPage } from 'next'
import Typed from 'react-typed'
import { FaBitcoin } from 'react-icons/fa'
import Button from '../button'

const Home: NextPage = () => {
  const headlines = ['Design.', 'Develop.', 'Code.', 'Ideate.', 'Bitcoin.']

  return (
    <div className="w-screen overflow-hidden font-mono">
      <div className="flex flex-col items-center">
        <div className="max-w-xl">
          <nav className="self-start mt-4 mx-2 flex justify-between items-center">
            <h1 className="text-3xl text-green-400 font-medium">MoneyHacks</h1>
            <div className="text-green-400 text-5xl mr-4">
              <FaBitcoin />
            </div>
          </nav>
          <main className="mt-2">
            <h2 className="text-xl text-green-500 font-medium mx-2">
              <Typed
                strings={headlines}
                typeSpeed={40}
                backSpeed={60}
                loop
              ></Typed>
            </h2>
            <h3 className="text-gray-300 mx-2 mt-4 text-sm">
              First ever "Bitcoin-Only" Hackathon at India.
            </h3>
            <img className="mt-10" src="/btc-banner.webp" />
            <p className="mt-10 text-gray-300 mx-2 text-md">
              Are you hyped up for Bitcoin for all of its magic, while your
              parents and friends never seem to get it, and find yourself as a
              lone <i>*psychopath*</i> in this clown world??
            </p>
            <p className="mt-4 text-gray-300 mx-2 text-md">The wait is over!</p>
            <p className="mt-4 text-gray-300 mx-2 text-md">
              Join us on{' '}
              <span className="text-green-300 font-bold">
                **15th September 2022**
              </span>{' '}
              with participants from all accross the nation for a week of
              creation, innovation and talks about money.
            </p>
            <Button className="mt-6 mx-2 text-lg font-bold px-4">
              Register
            </Button>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
