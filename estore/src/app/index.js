import { ProductService } from "./product.service.js";

class App {
  constructor() {
    this.service = new ProductService();
    //this.service.getProducts().then(products => console.log(products));
  }

  async render() {
    const root = document.querySelector("#root");
    const products = await this.service.getProducts();
    root.appendChild(this._getHeader());
    root.appendChild(this._getAddProductForm());
    root.appendChild(this._getTable(products));
    this._attachForm();
  }

  _attachForm() {
    const form = document.querySelector("form");
    form.addEventListener("submit", e => {
      e.preventDefault();
      e.stopPropagation();
      const name = document.querySelector("#pname").value;
      const price = document.querySelector("#pprice").value;
      const stock = document.querySelector("#pstock").value;
      this.service.addProduct({ name, price, stock }).then(_ => {
        location.reload();
      });
    });
  }
  _getHeader() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "EStore";
    h1.setAttribute("style", "color:maroon;text-align:center");
    header.appendChild(h1);
    return header;
  }

  _getTable(products) {
    const table = document.createElement("table");
    table.appendChild(this._getTableHeader());
    const rows = products.map(p => this._getRow(p));
    table.append(...rows);
    return table;
  }

  _getRow({ id, name, price, stock }) {
    const row = document.createElement("tr");
    row.className = "table-row";
    const idCol = document.createElement("td");
    idCol.textContent = id;

    const nameCol = document.createElement("td");
    nameCol.textContent = name;

    const priceCol = document.createElement("td");
    priceCol.textContent = price;

    const stockCol = document.createElement("td");
    stockCol.textContent = stock;

    const deleteActionCol = document.createElement("td");

    const button = document.createElement("button");
    button.textContent = "DELETE";
    button.addEventListener("click", () => {
      let fn = this.service.deleteProduct.bind(this, id);
      fn().then(_ => {
        location.reload();
      });
    });
    deleteActionCol.appendChild(button);

    row.append(idCol, nameCol, priceCol, stockCol, deleteActionCol);
    return row;
  }

  _getTableHeader() {
    const headerRow = document.createElement("tr");

    const idCol = document.createElement("td");
    idCol.textContent = "ID";

    const nameCol = document.createElement("td");
    nameCol.textContent = "NAME";

    const priceCol = document.createElement("td");
    priceCol.textContent = "PRICE";

    const stockCol = document.createElement("td");
    stockCol.textContent = "STOCK";

    const ActionsCol = document.createElement("td");
    ActionsCol.textContent = "ACTIONS";

    headerRow.append(idCol, nameCol, priceCol, stockCol, ActionsCol);
    return headerRow;
  }

  _getAddProductForm() {
    const container = document.createElement("div");
    const html = `
    <fieldset id="product-form" style="width:80%;margin:0 auto;padding:5px">
      <form>
        <legend>Add Product</legend>
        <input type="text" placeholder="product name" id="pname">
        <input type="number" placeholder="product price" id="pprice">
        <input type="number" placeholder="product stock" id="pstock">
        <input type="submit" value="Add">
      </form>
    </fieldset>
    `;
    container.innerHTML = html;
    return container;
  }
}

const app = new App();
app.render().then(_ => console.log("App Started"));
