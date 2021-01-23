import React, {useState,useEffect} from 'react';
import Header from '../Header/header';
import Items from '../Items/Items';
import './home.css';

const Home = () =>{
return <div>
    <Header showCart/>
    <Items/>
</div>
}
export default Home;