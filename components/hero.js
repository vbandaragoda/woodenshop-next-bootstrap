const Hero = () => {
  return (
    <>
      <div
        id="intro-example"
        className="text-start text-lg-start bg-image"
        style={{
          backgroundImage: `url("/hero-image.jpg")`,
          height: "100vh",
        }}
      >
        <div className="hero-content col-lg-10 mx-auto px-4">
          <p className="hero-p">FOR ALL COLLECTIONS</p>
          <h1 className="h hero-h1 fw-bold">
            Get up to 30%
            <br />
            Off New Arrivals
          </h1>
          <div className="d-grid gap-2 justify-content-sm-start">
            <button type="button" className="hero-btn">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
