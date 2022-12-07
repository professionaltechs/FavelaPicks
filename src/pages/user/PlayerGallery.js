import React from 'react'
import { PlayerCard } from '../../components/user/playerGallery/PlayerCard'

import image1 from '../../assets/img/playerGallery/3da9d40e-69ea-4e9c-b9a2-fb0ebe45559d.jpg'
import image2 from '../../assets/img/playerGallery/Beautiful reflection_.jpg'
import image3 from '../../assets/img/playerGallery/Goku Ultra wallpaper by husnainshah769 - Download on ZEDGE™ _ db98.jpg'
import image4 from '../../assets/img/playerGallery/Neymar jr hot Neymar hot wallpaper Neymar jr wallpapers 4k Neymar vídeos Neymar jr hairstyle.jpg'
import image5 from '../../assets/img/playerGallery/Sunset in Santa Rosa Beach Florida.jpg'

export const PlayerGallery = () => {
  return (
    <div>
    <div class="mainGallery">
      <h1>Player Gallery</h1>
      <div>
        <PlayerCard sourceIMG={image1}/>
        <PlayerCard sourceIMG={image2}/>
        <PlayerCard sourceIMG={image3}/>
        <PlayerCard sourceIMG={image4}/>
        <PlayerCard sourceIMG={image5}/>
        <PlayerCard sourceIMG={image1}/>
        <PlayerCard sourceIMG={image2}/>
        <PlayerCard sourceIMG={image3}/>
        <PlayerCard sourceIMG={image4}/>
        <PlayerCard sourceIMG={image5}/>
      </div>
    </div>
  </div>
  )
}
