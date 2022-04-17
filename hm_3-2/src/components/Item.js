import React from 'react'
import PropTypes from 'prop-types'

function Item(props) {
    const {item} = props;
    
    if(!item.title){
            return
    }
  const arr = Array.from(item.title);
  arr.splice(50);
  if(arr.length>49){arr.push('...')}

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt='' />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{arr.join('')}</p>
        <p className="item-price">{item.currency_code==='USA'?'$'+item.price:item.currency_code==='EUR'?'€'+item.price:item.price+'GBR'}</p>
        <p className={`item-quantity level-${item.quantity<11?'low':item.quantity>20?'high':'medium'}`}>{item.quantity}</p>
      </div>
    </div>
   )
}

Item.propTypes = {
     item: PropTypes.object.isRequired,
}

export default Item
