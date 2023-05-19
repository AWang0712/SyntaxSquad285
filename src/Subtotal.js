import React from 'react'
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {

    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        {/* Price */}
        <p>
            Subtotal ({basket.length} items): <strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(getBasketTotal(basket))}</strong>
        </p>
        <small className='subtotal__gift'>
            <input type='checkbox' /> This order contains a gift
        </small>
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal
