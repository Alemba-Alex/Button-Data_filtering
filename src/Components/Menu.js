import React from 'react'

const Menu = (props) => {
  return (
    <div className='item'>
      {
        props.menuItem.map((items)=>{
          return <div className="item-con" key={items.id}>
            <div className='item-container'>
              <img src={items.image}/>
              <h2>{items.title}</h2>
              <p>{items.description}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Menu
