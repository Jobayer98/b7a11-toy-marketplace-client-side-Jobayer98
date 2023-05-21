const Gallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <h1 className="text-4xl font-semibold text-orange-500 w-24 mx-auto my-12">
        Gallery
      </h1>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-[25%] flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
              src="https://i.ibb.co/cCJdxpL/microscope-kit.png"
            />
          </div>
        </div>
        <div className="flex w-[25%] flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
              src="https://i.ibb.co/1zVCJyK/chemical-react.jpg"
            />
          </div>
        </div>
        <div className="flex w-[25%] flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
              src="https://i.ibb.co/YTYFF5G/first-aid.jpg"
            />
          </div>
        </div>
        <div className="flex w-[25%] flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
              src="https://i.ibb.co/CmM0RfS/renewable.jpg"
            />
          </div>
        </div>
        <div className="flex w-[25%] flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
              src="https://i.ibb.co/XJCT4yt/civil.jpg"
            />
          </div>
        </div>
        <div className="flex w-[25%] flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
              src="https://i.ibb.co/cXF6HRg/periodic.jpg"
            />
          </div>
        </div>
        <div className="flex w-[25%] flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
              src="https://i.ibb.co/MkXfnsY/screwdriver.jpg"
            />
          </div>
        </div>
        <div className="flex w-[25%] flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
              src="https://i.ibb.co/4ZkWSrg/shape.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
