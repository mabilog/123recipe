import React, { useEffect } from 'react'

const Favorites = ({ favorites }) => {
  favorites.map(favorite => console.log(favorite.id))

  return (
    <div>
      
    </div>
  )
}

export default Favorites
