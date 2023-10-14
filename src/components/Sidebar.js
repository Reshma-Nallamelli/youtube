import React from 'react'
import logo from './youtube.jpeg'
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
    <div className='col-md-4 '>
        <div>
           <i class="fa-solid fa-bars"></i>
           <img src={logo} width="30" margin='20px'/>
           <span style={{fontSize:"30px",margin:"10px"}}>youtube</span><hr></hr>
          </div>

        <div> 
           <Link to="Home">  <ul><i class="fa-solid fa-house"></i>  home</ul></Link>
           <Link to="Shorts"> <ul><i class="fa-solid fa-bolt"></i>  shorts</ul></Link>
            <ul><i class="fa-solid fa-album-collection-circle-user"></i>   subscription </ul><hr></hr>
        </div>
        <div>
          <ul><i class="fa-solid fa-clock-rotate-left"></i>  history</ul>
          <ul><i class="fa-solid fa-clock"></i>  watch later</ul>
          <ul><i class="fa-solid fa-thumbs-up"></i>  liked videos</ul><hr></hr>
        </div>
        <h3>subscriptions</h3>
        <div>
          <ul><i class="fa-sharp fa-solid fa-circle-plus"></i>  Browse channels</ul><hr></hr>
        </div>
        <h2>Explore</h2>
        <div>
          <ul><i class="fa-sharp fa-solid fa-fire"></i>  Trending</ul>
          <ul><i class="fa-solid fa-bag-shopping"></i>  Shopping</ul>
          <ul><i class="fa-solid fa-music"></i>  Music</ul>
          <ul><i class="fa-solid fa-film"></i>  Movie</ul>
          <ul><i class="fa-solid fa-signal"></i>  Live</ul>
          <ul><i class="fa-solid fa-gamepad"></i>  Gaming</ul>
          <ul><i class="fa-solid fa-newspaper"></i>News</ul>
          <button>Users</button>
        </div>
    </div>
    </>
  )
}