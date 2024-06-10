function Navbar() {
  return (
    <>
      <nav className="navbarMenu h-20 w-screen z-50 bg-white px-5 fixed top-0 left-0 flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <a href="#" className="flex gap-1 items-center cursor-pointer">
            <svg width="34px" height="34px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Pinterest-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-300.000000, -260.000000)" fill="#e60023"> <path d="M324.001411,260 C310.747575,260 300,270.744752 300,284.001411 C300,293.826072 305.910037,302.270594 314.368672,305.982007 C314.300935,304.308344 314.357382,302.293173 314.78356,300.469924 C315.246428,298.522491 317.871229,287.393897 317.871229,287.393897 C317.871229,287.393897 317.106368,285.861351 317.106368,283.59499 C317.106368,280.038808 319.169518,277.38296 321.73505,277.38296 C323.91674,277.38296 324.972306,279.022755 324.972306,280.987123 C324.972306,283.180102 323.572411,286.462515 322.852708,289.502205 C322.251543,292.050803 324.128418,294.125243 326.640325,294.125243 C331.187158,294.125243 334.249427,288.285765 334.249427,281.36532 C334.249427,276.10725 330.707356,272.170048 324.263891,272.170048 C316.985006,272.170048 312.449462,277.59746 312.449462,283.659905 C312.449462,285.754101 313.064738,287.227377 314.029988,288.367613 C314.475922,288.895396 314.535191,289.104251 314.374316,289.708238 C314.261422,290.145705 313.996119,291.21256 313.886047,291.633092 C313.725172,292.239901 313.23408,292.460046 312.686541,292.234256 C309.330746,290.865408 307.769977,287.193509 307.769977,283.064385 C307.769977,276.248368 313.519139,268.069148 324.921503,268.069148 C334.085729,268.069148 340.117128,274.704533 340.117128,281.819721 C340.117128,291.235138 334.884459,298.268478 327.165285,298.268478 C324.577174,298.268478 322.138649,296.868584 321.303228,295.279591 C321.303228,295.279591 319.908979,300.808608 319.615452,301.875463 C319.107426,303.724114 318.111131,305.575587 317.199506,307.014994 C319.358617,307.652849 321.63909,308 324.001411,308 C337.255248,308 348,297.255248 348,284.001411 C348,270.744752 337.255248,260 324.001411,260" id="Pinterest"> </path> </g> </g> </g></svg>
            <p className="tracking-tight main_font red_100_clr text-xl font-semibold">Pinterest</p>
          </a>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:gray_100_bg px-2 py-1 rounded-md cursor-pointer text-md font-semibold">Watch</a>
            <a href="#" className="hover:gray_100_bg px-2 py-1 rounded-md cursor-pointer text-md font-semibold">Explore</a>
          </div>
          
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline cursor-pointer text-md font-semibold">About</a>
            <a href="#" className="hover:underline cursor-pointer text-md font-semibold">Business</a>
            <a href="#" className="hover:underline cursor-pointer text-md font-semibold">Blog</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="hover:red_200_bg red_100_bg py-2 px-3 clr rounded-full text-white font-semibold whitespace-nowrap">Log in</button>
            <button className="hover:gray_200_bg gray_100_bg py-2 px-3 clr rounded-full text-black font-semibold whitespace-nowrap">Sign up</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
