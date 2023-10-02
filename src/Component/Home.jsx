import React from 'react'
import {Button,Image} from 'react-bootstrap';
import './Home.css';

function Home() {
    const comSoon =()=>{
        alert("Avaliable for Purchase 01-01-2024");
    }
  return (
    <div>
        <div className='container card mt-5 mb-5'>
            <div className="row">
                <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div className='p-5'>
                        <h1>Shooes....</h1>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem iusto ducimus voluptate quod placeat adipisci. Quasi culpa, minima consequuntur consectetur at sunt illo deserunt cupiditate architecto, dolores adipisci. Alias, suscipit!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas enim sunt eveniet tempora qui praesentium labore ut reiciendis, ab ipsum aspernatur quidem nesciunt harum sit incidunt vel doloribus corporis?</p>
                        <Button onClick={comSoon}>Coming Soon</Button>
                        </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                       <div className='p-5 '> <div className='shooes'><Image className='shadow' src="https://media.istockphoto.com/id/1172886559/photo/multi-colored-shoe-on-gradient-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=c10BHVL0V4vg4yi5s2tWDOcqSn09b-EjVZK61w9Bu6g=" width={'341px'} height={'350px'} roundedCircle /></div></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home