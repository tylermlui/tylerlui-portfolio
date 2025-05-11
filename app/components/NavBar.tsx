export default function NavBar() {
    return(
        <nav className="px-[8vw]">
        <div className="flex flex-wrap items-center justify-between mx-auto pt-[2vw]">
          <img src="/TL.png" className="h-8" alt="TL Logo" />
          <button
            type="button"
            className="group inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1h-9"
                className="stroke-white stroke-2 group-hover:opacity-0 transition-all duration-300"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 7h15"
                className="stroke-white stroke-2 transition-all duration-300"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 13h-9"
                className="stroke-white stroke-2 group-hover:opacity-0 transition-all duration-300"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    )
}
