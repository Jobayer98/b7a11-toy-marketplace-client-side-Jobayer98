const NewToy = () => {
  return (
    <div className="my-16 mx-auto bg-red-300 w-[60%] py-6">
      <h1 className="text-4xl text-gray-600 font-semibold mb-12 mx-auto w-64">
        Add a new Toy
      </h1>
      <form className="flex gap-4 justify-center">
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Toy Name</label>
          <label htmlFor="seller_name">Seller Name</label>
          <label htmlFor="seller_email">Selller Email</label>
          <label htmlFor="Sub_category">Sub-category</label>
          <label htmlFor="price">Price</label>
          <label htmlFor="rating">Rating</label>
          <label htmlFor="quantity">Quantity</label>
          <label htmlFor="description">Description</label>
          <label htmlFor="img_url">Image Url</label>
        </div>

        <div className="flex flex-col gap-4 w-[30%]">
          <input type="text" name="name" id="name" />
          <input type="text" name="seller_name" id="seller_name" />
          <input type="email" name="seller_email" id="seller_email" />
          <select name="sub_category" id="Sub_category">
            <option value="math">Math</option>
            <option value="physic">Physic</option>
            <option value="chemistry">Chemistry</option>
            <option value="medical">Medical</option>
            <option value="engineering_kits">Engineering Kit</option>
            <option value="engineering_tools">Engineering Tools</option>
          </select>

          <input type="number" name="rating" id="rating" />
          <input type="text" name="price" id="price" />
          <input type="number" name="quantity" id="quantity" />
          <input type="text" name="description" id="description" />
          <input type="url" name="img_url" id="img_url" />
        </div>
      </form>
    </div>
  );
};

export default NewToy;
