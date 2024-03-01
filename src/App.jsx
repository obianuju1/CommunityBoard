import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App () {
  const cuisines = [
    {
      image:'/src/images/Aries.jpeg',
      name:'Aries',
      description:'Mar 21 - Apr 19',
      button:'https://www.astrology.com/zodiac-signs/aries'
    },
    {
      image:'/src/images/taurus.jpeg',
      name:'Taurus',
      description:'Apr 20 - May 20',
      button:'https://www.astrology.com/zodiac-signs/taurus'
    },
    {
      image:'/src/images/Gemini.jpeg',
      name:'Gemini',
      description:'May 21 - Jun 20',
      button:'https://www.astrology.com/zodiac-signs/gemini'
    },
    {
      image:'/src/images/Cancer.jpeg',
      name:'Cancer',
      description:'Jun 21 - Jul 22',
      button:'https://www.astrology.com/zodiac-signs/cancer'
    },
    {
      image:'/src/images/leo.jpeg',
      name:'Leo',
      description:'Jul 23 - Aug 22',
      button:'https://www.astrology.com/zodiac-signs/leo'
    },
    {
      image:'/src/images/virgo.jpeg',
      name:'Virgo',
      description:'Aug 23 - Sep 22',
      button:'https://www.astrology.com/zodiac-signs/virgo'
    },
    {
      image:'/src/images/libra.jpeg',
      name:'Libra',
      description:'Sep 23 - Oct 22',
      button:'https://www.astrology.com/zodiac-signs/libra'
    },
    {
      image:'/src/images/scorpio.avif',
      name:'Scorpio',
      description:'Oct 23 - Nov 21',
      button:'https://www.astrology.com/zodiac-signs/scorpio'
    },
    {
      image:'/src/images/Sagittarius.jpeg',
      name:'Sagittarius',
      description:'Nov 22 - Dec 21',
      button:'https://www.astrology.com/zodiac-signs/sagittarius'
    },
    {
      image:'/src/images/Capricorn.jpeg',
      name:'Capricorn',
      description:'Dec 22 - Jan 19',
      button:'https://www.astrology.com/zodiac-signs/capricorn'
    },
    {
      image:'/src/images/Aquarius.jpeg',
      name:'Aquarius',
      description:'Jan 20 - Feb 18',
      button:'https://www.astrology.com/zodiac-signs/aquarius'
    },
    {
      image:'/src/images/pisces.webp',
      name:'Pisces',
      description:'Feb 19 - Mar 20',
      button:'https://www.astrology.com/zodiac-signs/pisces'
    },
  ]
  return(
    <>
    
      <h1>Astrology</h1>
      <h3>Learn more about your zodiac sign</h3>
      <div className='Container'>
    {
      cuisines.map((cuisine,i) => {
        return(
      
        <Card
          image={cuisine.image}
          key={i}
          name={cuisine.name}
          description= {cuisine.description}
          button = {cuisine.button}/>
        
          
          )
        

          
      })

    }
      </div>
    </>
  
  )
}

export default App
