import React from 'react';


const OrderSummary = (probs)=>{
    return( 
        <div>
            <h3>Таны захиалгууд</h3>
            <p>Таны сонгосон орцууд</p>
            <ul>
                {Object.keys(probs.ingredients).map((el)=>{
                    return <li key={el}>{probs.ingredientsNames[el]} : {probs.ingredients[el]}</li>
                })}
            </ul>
            <p>Цаашаа үргэжлүүлэх үү</p>
        </div>
    )
}
export default OrderSummary;