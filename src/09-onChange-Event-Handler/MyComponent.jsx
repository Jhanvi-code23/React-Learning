/* onChange is an event handler used primarily with form elements
For example, it can be used to update the state of a component when the user types in an input field.
<input>, <textarea>, <radio> and <select> elements
Triggers a function every time the value of the input changes */


import React, { useState } from "react";
function MyComponent() {
    const [name,setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleChange}/>
            <p>Name: {name}</p> {/* The onChange event handler is attached to the input element.
                                 when the user inputs a value in the input field, it updates the name in real time */}
            
            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p> {/* The onChange event handler is attached to the input element.
                                 when the user inputs a value in the input field, it updates the quantity in real time */}
            
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions..."/>
            <p>Comment: {comment}</p> {/* The onChange event handler is attached to the textarea element.
                                 when the user inputs a value in the textarea, it updates the comment in real time */}

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select payment method</option>
                <option value="VISA">VISA</option>
                <option value="Master Card">MasterCard</option>
                <option value="American Express">American Express</option>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash">Cash</option>
            </select>
            <p>Payment Method: {payment}</p> {/* The onChange event handler is attached to the select element.
                                 when the user selects a value in the select dropdown, it updates the payment method in real time */}

            <select value={shipping} onChange={handleShippingChange}>
                <option value="">Select shipping method</option>
                <option value="standard">Standard</option>
                <option value="express">Express</option>
                <option value="overnight">Overnight</option>
            </select>
        
            <p>Shipping Method: {shipping}</p> {/* The onChange event handler is attached to the select element.
                                 when the user selects a value in the select dropdown, it updates the shipping method in real time */}
            <label>
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleShippingChange}
                />
                Pick Up
            </label> <br/>

            <label>
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}
                />
                Delivery
            </label>
            
        </div>
    );
}

export default MyComponent;