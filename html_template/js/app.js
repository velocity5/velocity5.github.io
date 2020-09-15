const PRODUCTS = [
  {
    id: 1,
    name: "Product1",
    description: "one descript",
    image: "https://via.placeholder.com/200x150",
    price: 10,
    quantity: 1,
    totalItem: 0,
  },
  {
    id: 2,
    name: "Product2",
    description: "two descript",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
    totalItem: 0,
  },
];

function App() {
  const taxPercent = 0.1;
  let subTotal = 0;
  let numberItems = 0;
  // tinh tong so san pham tong tien
  for (let i = 0; i < PRODUCTS.length; i++) {
    numberItems += PRODUCTS[i].quantity;
    subTotal += PRODUCTS[i].price * PRODUCTS[i].quantity;
  }
  let taxes = taxPercent * subTotal;
  const [products, setProducts] = React.useState(PRODUCTS);
  // them san pham
  function addCart() {
    const newProduct = [...products];
    newProduct.push({
      id: randomId(),
      name: "Laptop DELL 3",
      description: "Description 3",
      image: "https://via.placeholder.com/200x150",
      price: 70,
      quantity: 11,
    });
    // cap nhat state
    setProducts(newProduct);
  }
  // tao id random
  function randomId() {
    return (Math.floor(Math.random() * 1000))
  }
   // xoa san pham
  function removeProduct(productId, productName) {
    alert("Xoá sản phẩm " + productName +" ?");
    const copyProduct = [...products];
    let idProduct = copyProduct.findIndex(element => productId);
    copyProduct.splice(idProduct,1);
    setProducts(copyProduct);
  }
  
  return (
    <main>
      <CartHeader
        numberItem={numberItems}
        title="Shopping Cart"
        buttonAdd = {addCart}
       />
      <section className="container">
        <CartBody products={products} removeProduct={removeProduct} />
      </section>
      <section className="container">
        <CartFooter subTotal={subTotal} tax={taxes} />
      </section>
    </main>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
