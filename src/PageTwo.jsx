import './PageTwo.css';
function PageTwo(){
  return(
    <>
    <section className="pageTwo">
      <div className='TwoBox'>
        <div className='TwoBoxInner'>
            <img className='TwoImg' src='public/images/TwoImageMix.png' />
            <a target='_blank' href='https://www.pinterest.com/search/pins/?q=easy%20chicken%20dinner' className='link'>
              <svg fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Glyph" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14 s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0 C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_"></path></g></svg>
              <p>easy chicken dinner</p>
            </a>
        </div>
        <div className='BoxTwoText'> 
          <h1>
            Search for an idea 
          </h1>    
          <p>What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.</p>
          <button className='px-4 py-3 red_100_bg text-white rounded-full hover:red_200_bg'>
            Explore
          </button> 
        </div>
      </div>
    </section>
    </>
  )
    
}

export default PageTwo;