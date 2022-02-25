import React from "react";
import logo from './images/Logo.png'
import vector from './images/Vector.png'
import lan from './images/lan.png'
import bgi from './images/bgi.png'
class Comp1 extends React.Component{
    constructor(){
        super()
    }
   click=()=>{
        let a = document.getElementById('j')
        a.classList.toggle('vector__header_rot')
   }

    render(){
        return(<div>
                <header>
               <div><img className="logo__header" src={logo} /></div>
                <ul className="ul__header">
                    <li onClick={this.click} id = "vectorli">Դասընթացներ<img id="j" className="vector__header" src={vector} /></li> 
                    <li>Իրադարձություններ</li>
                    <li>Աշխատանք</li>
                    <li>Ծառայություններ</li>
                </ul>
                    
                <button id="btn1__header" className="button__header">Մուտք գործել</button>
                <button id="btn2__header" className="button__header">Գրանցվել</button>
                <img className="language__header" src={lan}/>
        
                </header>
                <section className="section1">
                    <div className="section1__div1">
                        <p className="section1__div1__p1">Սկսիր քո կարիերան IT ոլորտում</p>
                        <button className="section1__button1">Մասնագիտություններ</button>
                    </div>
                        <div><img className="section1__img1" src={bgi}></img></div>
                    </section>
            </div>
            )
    }
}
export default Comp1