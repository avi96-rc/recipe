import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


const Veggie = () => {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getPopular();
    console.log("useEffect()-->");
  }, []);

  const getPopular = async () => {

    // check if data already present in the local storage..
    const check = localStorage.getItem('popular');
    if (check) {
      // set the data 
      setVeggie(JSON.parse(check));
    } else {
      console.log('fetching data from api...')
      const url = "https://api.spoonacular.com/recipes/random";
      const api = await fetch(
        `${url}?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegeterian`
      ).catch(error=>console.log(error)
      );

      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);

    }
  };




  return (
    <Wrapper>
    <h3>Our Veggies</h3>

    <Splide options={{
      perPage:3,
      pagination:false,
      arrows:false,
      autoplay:true,
      drag:'free',
      gap:'2rem'
      
    }}>
      {veggie.map((recipe) => {
        return (
          
          <SplideSlide key={recipe.id }>
            
            <Card >
              <p >{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient/>
            </Card>
          
          </SplideSlide>
          
        )
      })}
    </Splide>

  </Wrapper>
  )
};

    

export default Veggie;


const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  /* width: 20rem; */
  border-radius: 2rem;
  overflow:hidden;
  position: relative;


  img{
    border-radius:2rem;
    position: absolute;
    width:100%;
    height: 100%;
    object-fit: cover;


  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom:0% ;
    transform: translate(-50%,0%);
  color: white;
  text-align: center;
  font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
  }

`;

const Gradient  = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background:linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0.5));
`;


