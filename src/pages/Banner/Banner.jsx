const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/gF3YyYD/banner-image.jpg"
          className="max-w-xl max-h-xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold">
            Discover Leading <br />{" "}
            <span className="text-5xl font-bold text-[#2e6ed5]">
              Electronics Brands
            </span>
          </h1>
          <p className="py-6">
            Welcome to our online brand shop, your gateway to a world of
            cutting-edge technology and innovation. Explore a curated selection
            of top-tier electronics brands that redefine the way we live, work,
            and play. Whether you're in search of the latest smartphones,
            state-of-the-art laptops, premium audio gear, or smart home
            solutions, our collection has you covered.
          </p>
          <button className="btn bg-[#2e6ed5] text-white">Explore Brand</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
