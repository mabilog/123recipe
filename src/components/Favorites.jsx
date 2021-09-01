import React from 'react'

const Favorites = ({ favorites }) => {
  favorites.map(favorite => console.log(favorite.id))

  return (
    <div>
      Favorites Component
    </div>
  )
}

export default Favorites
