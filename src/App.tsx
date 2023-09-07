import ilustration from './assets/illustration-hero.svg'
import music from './assets/icon-music.svg'

export default function App() {
  return (
    <div className="flex flex-col bg-[--very-pale-blue] w-[50vh] rounded-2xl">
      <img className="rounded-t-2xl" src={ilustration} alt="" />

      <main className="flex flex-col px-5 py-10 space-y-7">
        <div className="space-y-5">
          <h1 className="text-[--dark-blue] text-2xl font-extrabold">Order Summary</h1>

          <p className="text-sm text-[--desaturated-blue]">
            You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!
          </p>
        </div>

        <div className="flex w-full justify-between px-5 group cursor-pointer">
          <div className="flex">
            <img className="w-10 h-10 mr-5" src={music} alt="" />

            <div>
              <h2 className="text-[--dark-blue] text-sm font-semibold">Annual Plan</h2>
              <span className="text-xs text-[--desaturated-blue]">$59.99/year</span>
            </div>
          </div>

          <button className="font-semibold group-hover:text-[--bright-blue-hover] text-[--bright-blue] text-sm underline">Change</button>
        </div>

        <button className="hover:bg-[--bright-blue-hover] bg-[--bright-blue] text-white text-sm font-semibold rounded-lg mx-2 py-2">Proceed to Payment</button>
        <button className="font-bold hover:text-[--desaturated-blue-hover] text-[--desaturated-blue] text-xs mx-auto">Cancel Order</button>
      </main>
    </div>
  )
}