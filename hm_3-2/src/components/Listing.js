import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import Item from './Item';

function Listing(props) {
    const {items} = props;
//
  return (<div className="item-list">
      {items.map((el) => <Item item={el} key={nanoid()} />)}
      </div>
  )

  
}

Listing.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Listing
