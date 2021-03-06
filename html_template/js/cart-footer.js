function CartFooter(props) {
  return (
    <div>
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> 
        <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal{" "}
            <span>
              $
              {(props.subTotal).toLocaleString()}
            </span>
          </li>
          <li>
            Tax{" "}
            <span>
              $
              {(props.tax).toLocaleString()}
            </span>
          </li>
          <li className="total">
            Total{" "}
            <span>
              $
              {(props.subTotal + props.tax).toLocaleString()}
            </span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </div>
  );
}
