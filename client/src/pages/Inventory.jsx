import React, { useState } from "react";
import Topbar from "../components/Topbar";
import { useCookies } from "react-cookie";
import axios from "axios";

const Inventory = () => {
  const [cookies, setCookie] = useCookies(["storeId"]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    subcategory: "",
    quantity: "",
    store_id: cookies.storeId,
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/product/addproduct",
        formData
      );
      console.log(response.data); // You can handle the response here
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  return (
    <div>
      <Topbar />
      <div>Inventory</div>
      <div className="flex flex-col w-full mt-8">
        <form onSubmit={handleSubmit} className="w-full px-10">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="category"
            >
              Category
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="seeds">Seeds</option>
              <option value="crop protection">Crop Protection</option>
              <option value="textile">Textile</option>
              <option value="crop nutrition">Crop Nutrition</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="subcategory"
            >
              Subcategory
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="subcategory"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="photoUrl"
            >
              Photo URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="url"
              id="photo"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
