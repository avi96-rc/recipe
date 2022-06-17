import {FaPizzaSlice,FaHamburger    } from 'react-icons/fa'
import {GiNoodles,  GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import React from 'react'

const Category = () => {
  return (
    <List>
        <NavLink to={'/cuisine/italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink >
        <NavLink to={'/cuisine/italian'}>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisine/italian'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink >
        <NavLink to={'/cuisine/italian'} >
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink>

    </List>
  )
};

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    `;

export default Category