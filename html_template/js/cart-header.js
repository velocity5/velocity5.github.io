function CartHeader(props) {
    return (
      <header className="container">
        <h1>{props.title}</h1>
        <ul className="breadcrumb">
          {props.listBreadCrumb.map(item => (
            <li key={item}>{item}</li>
            ))}
        </ul>
        <span className="count">{props.numberItem} items in the bag</span>
      </header>
    );
}