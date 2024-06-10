import "./PageThree.css";
function PageThree() {
  return (
    <>
      <section className="PageThree">
        <div className="ThreeBox">
          <div className="BoxTwoText">
            <h1 className="!blue_100_clr">Save ideas you like</h1>
            <p className="!blue_100_clr">
            Collect your favorites so you can<br /> get back to them later.
            </p>
            <button className="px-4 py-3 red_100_bg text-white rounded-full">
              Explore
            </button>
          </div>
          <div className="ThreeBoxInner">
            <img
              className="ThreeImg"
              src="images/threeimage1.png"
            />
            <img
              className="ThreeImg"
              src="images/threeimage2.png"
            />
            <img
              className="ThreeImg"
              src="images/threeimage3.png"
            />
            <img
              className="ThreeImg"
              src="images/threeimage4.png"
            />
            <img
              className="ThreeImg"
              src="images/threeimage5png.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PageThree;
