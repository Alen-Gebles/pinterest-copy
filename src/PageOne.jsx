import './PageOne.css';
function PageOne(){
  return(
    <>
    <section className="relative h-screen w-screen bg-white">
      <div className="absolute headPosition zIndex right50 flex flex-col items-center justify-center">
        <h1 className="headline">Get your next</h1>
        <h1 className="headline green_100_clr">green thumb idea</h1>
        <div className='dots'><span></span><span></span><span></span><span className='dot4'></span></div>
      </div>
      <div className="absolute bottom-0 right50 px-5 imageHeight flex gap-2">
        <div className="imageColumn">
          <img className="imgStyle" src="images/image1.jpg" />
          <img className="imgStyle" src="images/image2.jpg" />
        </div>
        <div className="imageColumn top-24">
          <img className="imgStyle" src="images/image3.jpg" />
          <img className="imgStyle" src="images/image4.jpg" />
        </div>
        <div className="imageColumn top-52">
          <img className="imgStyle" src="images/image5.jpg" />
          <img className="imgStyle" src="images/image6.jpg" />
        </div>
        <div className="imageColumn top-72">
          <img className="imgStyle" src="images/image7.jpg" />
          <img className="imgStyle" src="images/image8.jpg" />
        </div>
        <div className="imageColumn top-52">
          <img className="imgStyle" src="images/image9.jpg" />
          <img className="imgStyle" src="images/image10.jpg" />
        </div>
        <div className="imageColumn top-24">
          <img className="imgStyle" src="images/image11.jpg" />
          <img className="imgStyle" src="images/image12.jpg" />
        </div>
        <div className="imageColumn">
          <img className="imgStyle" src="images/image13.jpg" />
          <img className="imgStyle" src="images/image14.jpg" />
        </div>
      </div>


      <a className="shadowNav h-16 w-full flex items-center justify-center zIndex yellow_100_bg absolute bottom-0 left-0 text-md font-semibold">
        <div className="animate-float absolute bottom-20 w-12 h-12 flex items-center justify-center green_100_bg rounded-full">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ffffff"></path> </g></svg>
        </div>
        <p>Here&apos;s how it works</p>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"></path> </g></svg>
      </a>
    </section>
    </>
  )
    
  
}

export default PageOne;