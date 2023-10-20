const CustomerReview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-blue-400 p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="https://i.ibb.co/bFxSkkn/user2.jpg"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">Sarah T</h1>
            <p>Buyer</p>
          </div>
        </div>
        <p className="mt-3">
          I recently purchased a Digitech smartwatch from this store, and it has
          truly exceeded my expectations. The watch is stylish, feature-packed,
          and works seamlessly with my smartphone. I'm impressed with its
          accurate health monitoring and the long battery life. Digitech has won
          me over with this fantastic product
        </p>
      </div>
      <div className="border border-blue-400 p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="https://i.ibb.co/Tw2bQwN/user1.jpg"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">John Dude</h1>
            <p>Facebook marketer</p>
          </div>
        </div>
        <p className="mt-3">
          I've been a fan of Digitech products for years, and this new laptop
          didn't disappoint. It's fast, reliable, and the build quality is
          top-notch. However, I had a minor issue with the touchpad drivers
          initially, but their customer support helped me resolve it promptly.
          Overall, I'm pleased with my purchase.
        </p>
      </div>
      <div className="border border-blue-400 p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="https://i.ibb.co/h85J3ns/gopal.jpg"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">Alex M</h1>
            <p>Shop Dillar</p>
          </div>
        </div>
        <p className="mt-3">
          Digitech's wireless earbuds are nothing short of amazing. The sound
          quality is exceptional, and they fit comfortably in my ears, even
          during workouts. The Bluetooth connectivity is seamless, and the
          battery life is impressive. If you're looking for high-quality audio,
          these earbuds are a must-have!.
        </p>
      </div>
    </div>
  );
};

export default CustomerReview;
