function CartHeader(props) {
    return (
      <header className="container">
        <h1>{props.title}</h1>
        <ul className="breadcrumb">
          <li>Home</li>
          <li>{props.title}</li>
        </ul>
        <button onClick={props.buttonAdd}>Add Cart</button>
        <span className="count">{props.numberItem} items in the bag</span>
      </header>
    );
}