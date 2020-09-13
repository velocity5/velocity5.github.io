const PRODUCTS = [
  {
  id: 1,
  name: 'Product1',
  description: 'one descript',
  image: 'https://via.placeholder.com/200x150',
  price: 10,
  quantity: 1,
  totalItem: 0
},
{
  id: 2,
  name: 'Product2',
  description: 'two descript',
  image: 'https://via.placeholder.com/200x150',
  price: 7,
  quantity: 1,
  totalItem: 0
}
]
const listBreadCrumbs = ["Home", "Shopping Cart"];

// tinh lai product

ReactDOM.render(
    <main>
      <CartHeader numberItem={3} title="Shopping Cart" listBreadCrumb={listBreadCrumbs} />
  <section className="container">
    <CartBody products={PRODUCTS} />
  </section>
  <section className="container">
    <CartFooter subTotal={21.97} tax={5} />
  </section>
</main>
,
    document.getElementById('root')
);