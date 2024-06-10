function PageFour() {
  return (
    <>
      <section className="md:flex-row h-screen w-screen flex flex-col pink_100_bg">
        <div className="flex-1 h-full relative">
          <img
            className="imgPosition"
            src="images/PageFourMain.png"
          />
          <div className="absolute left-1/3 top-3/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <img
                className="md:w-60 w-36 h-auto rounded-3xl z-30"
                src="images/PageFourMainSec.png"
              />
              <div className="flex flex-col items-center absolute -bottom-12 left-1/4 text-white">
                <h4 className="font-semibold">Scout the City</h4>
                <p>56.7k followers</p>
              </div>
            </div>

            <img
              className="md:w-24 w-16 h-auto rounded-3xl z-40 relative bottom-12 right-12"
              src="images/PageFourSecSec.png"
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center flex-col text-center">
          <h1 className="leading-tight red_100_clr header_font_size px-5 font-bold">
            See it, make it,
            <br /> try it, do it
          </h1>
          <p className="leading-8 px-6 my-7 text_font_size red_100_clr">
            The best part of Pinterest is discovering
            <br /> new things and ideas from people
            <br /> around the world.
          </p>
          <button className="hover:red_200_bg px-4 py-3 red_100_bg text-white rounded-full">
            Explore
          </button>
        </div>
      </section>
    </>
  );
}

export default PageFour;
