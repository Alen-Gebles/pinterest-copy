function PageFive() {
  return (
    <>
      <section className="relative h-screen w-screen flex items-center justify-center">
        <img
          className="absolute imgPosition -z-10"
          src="public/images/PageFiveBG.png"
        />
        <div className="absolute block md:hidden w-screen h-screen bg_darker"></div>
        <div className="text-white z-50 md:text-black flex justify-between items-center w-2/3 flex-col md:flex-row">
          <h1 className="large_font_size text-center md:text-left  md:w-96 text-white font-semibold leading-tight">
            Sign up to get your ideas
          </h1>
          <div className="input_box bg-transparent md:bg-white  flex flex-col items-center text-center">
            <svg width="34px" height="34px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Pinterest-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-300.000000, -260.000000)" fill="#e60023"> <path d="M324.001411,260 C310.747575,260 300,270.744752 300,284.001411 C300,293.826072 305.910037,302.270594 314.368672,305.982007 C314.300935,304.308344 314.357382,302.293173 314.78356,300.469924 C315.246428,298.522491 317.871229,287.393897 317.871229,287.393897 C317.871229,287.393897 317.106368,285.861351 317.106368,283.59499 C317.106368,280.038808 319.169518,277.38296 321.73505,277.38296 C323.91674,277.38296 324.972306,279.022755 324.972306,280.987123 C324.972306,283.180102 323.572411,286.462515 322.852708,289.502205 C322.251543,292.050803 324.128418,294.125243 326.640325,294.125243 C331.187158,294.125243 334.249427,288.285765 334.249427,281.36532 C334.249427,276.10725 330.707356,272.170048 324.263891,272.170048 C316.985006,272.170048 312.449462,277.59746 312.449462,283.659905 C312.449462,285.754101 313.064738,287.227377 314.029988,288.367613 C314.475922,288.895396 314.535191,289.104251 314.374316,289.708238 C314.261422,290.145705 313.996119,291.21256 313.886047,291.633092 C313.725172,292.239901 313.23408,292.460046 312.686541,292.234256 C309.330746,290.865408 307.769977,287.193509 307.769977,283.064385 C307.769977,276.248368 313.519139,268.069148 324.921503,268.069148 C334.085729,268.069148 340.117128,274.704533 340.117128,281.819721 C340.117128,291.235138 334.884459,298.268478 327.165285,298.268478 C324.577174,298.268478 322.138649,296.868584 321.303228,295.279591 C321.303228,295.279591 319.908979,300.808608 319.615452,301.875463 C319.107426,303.724114 318.111131,305.575587 317.199506,307.014994 C319.358617,307.652849 321.63909,308 324.001411,308 C337.255248,308 348,297.255248 348,284.001411 C348,270.744752 337.255248,260 324.001411,260" id="Pinterest"> </path> </g> </g> </g></svg>
            <h3 className="text-3xl mt-5 mb-2 whitespace-nowrap font-semibold text-white bd:text-slate-800">Welcome to Pinterest</h3>
            <p>Find new ideas to try</p>
            <div className="relative w-full">
              <label className="absolute text-sm top-5 left-10" name="email">Email</label>
              <input name="email" className="bg-transparent backdrop-blur-md md:backdrop-blur-none md:bg-white relative input_media mt-10" placeholder="Email" type="email" />
            </div>
            <div className="relative w-full">
              <label className="absolute text-sm top-2 left-10" name="passowrd">Password</label>
              <input name="password" className="bg-transparent backdrop-blur-md md:backdrop-blur-none md:bg-white relative input_media mt-7" placeholder="Create a password" type="password" />
            </div>
            <div className="relative w-full">
              <label className="absolute text-sm top-2 left-10" name="date">Birthdate</label>
              <input name="date" className="bg-transparent backdrop-blur-md md:backdrop-blur-none md:bg-white relative input_media mt-7 mb-4" type="date" />
            </div>

            <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="flex items-center justify-center red_100_bg hover:red_200_bg text-white w-4/5 h-10 rounded-full cursor-pointer">Continue</a>
            <p className="font-semibold my-3">Or</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="justify-center bg-white border border-slate-400 text-slate-800 flex relative items-center w-4/5 h-10 rounded-full cursor-pointer"><svg className="absolute left-4 top-1/4" width="23px" height="23px" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g></svg><p className="mx-auto">Continue with Google</p></a>
          </div>
          <div className="absolute p-4 bottom-0 left-0 w-screen h-auto bg-white flex flex-wrap items-center justify-center gap-2">
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://policy.pinterest.com/en/terms-of-service">Terms of Service</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://policy.pinterest.com/en/privacy-policy">Privacy Policy</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://help.pinterest.com/en">Help</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://apps.apple.com/us/app/pinterest/id429047995">Iphone App</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://play.google.com/store/apps/details?id=com.pinterest&pli=1">Android App</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://www.pinterest.com/html_sitemap/pinners_a.html">Users</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://www.pinterest.com/html_sitemap/boards_a.html">Collections</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://www.pinterest.com/html_sitemap/shopping_0.html">Shopping</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://www.pinterest.com/today/">Today</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://www.pinterest.com/ideas/">Explore</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://www.pinterest.com/videos/">Watch</a>
            <a className="hover:underline text-black whitespace-nowrap text-xs" target="_blank" href="https://www.pinterest.com/ideas/">Shop</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageFive;
