import axios from "axios";

class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

//CRUD
export class ProductService {
  static baseURL = "http://localhost:3000";
  async getProducts() {
    try {
      let products = await axios
        .get(`${ProductService.baseURL}/products`)
        .then(res => res.data);
      return products;
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  }

  async deleteProduct(id) {
    try {
      await axios.delete(`${ProductService.baseURL}/products/${id}`);
      alert("product deleted");
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  }

  async addProduct(product) {
    try {
      let p = await axios
        .post(`${ProductService.baseURL}/products`, product)
        .then(r => r.data);
      alert(`product successfully added with id :${p.id}`);
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  }
}
