
export default function Home() {
    return (
      <main className="w-full h-screen overflow-hidden bg-gradient-to-b from-darkred to-black flex text-white">
        <section className="flex flex-col justify-center items-center w-full md:w-1/2 md:bg-gray-900">
          <h1 className="hidden md:inline -mt-12 mb-10 self-start px-10 text-4xl font-bold text-red-500">T-Learning</h1>
          <div className="p-5 max-w-xl w-[90%] bg-white bg-opacity-25 md:bg-transparent md:shadow-none shadow-xl rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p>Welcome back to T-Learning</p>
            <form className="mt-5">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black" id="username" type="text" placeholder="Username" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline text-black" id="password" type="password" placeholder="" />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2" htmlFor="password">
          Confirm Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline text-black" id="password" type="password" placeholder="" />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-red-800 hover:bg-red-700 transition-colors text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign Up
        </button>
      </div>
    </form>
          </div>
        </section>
        <section className="">
          <img src="gambar2.svg" alt="" />
        </section>
      </main>
    )
  }