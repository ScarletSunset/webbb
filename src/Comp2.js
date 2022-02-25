import React from "react";
import img1 from '../src/images/illustration 1.png';
import img2 from '../src/images/Illustration 2.png';
import img3 from '../src/images/undraw_education_f8ru 1.png'
import img4 from '../src/images/path0.png'
import img5 from '../src/images/path1.png'
import img6 from '../src/images/path2.png'
import img7 from '../src/images/Vector1.png'
import img8 from '../src/images/Vector2.png'
import img9 from '../src/images/Vector3.png'
import img10 from '../src/images/path3.png'
import img11 from '../src/images/path4.png'
import img12 from '../src/images/path5.png'
import img13 from '../src/images/svgg.png'
import img14 from '../src/images/svgg (1).png'
import img15 from '../src/images/svgg (2).png'
import img16 from '../src/images/path6.png'
import img17 from '../src/images/path7.png'
import img18 from '../src/images/path8.png'
import img19 from '../src/images/gif1.gif'
import img20 from '../src/images/gif2.gif'
import img21 from '../src/images/gif3.gif'
import img22 from '../src/images/gif4.gif'
import img23 from '../src/images/gif5.gif'
import img24 from '../src/images/gif6.gif'
import img25 from '../src/images/taki.png'


class Comp2 extends React.Component{
    constructor(){
        super()
    }
   
    render(){
        return(<div>
            
            <section className="section2">
                <p className="section2__p1">Ինչու մենք</p>
                <div className="section2__div">
                    <div id="hover1" className="section2__div_1">
                    <div className="section2__div_1_div">
                    <img src ={img1}></img>
                    <p className="section2__div_1_div_p1">Պրոֆեսիոնալ մոտեցում</p>
                    <p id="p1" className="section2__div_1_div_p2">
                    Մեր մասնագետները ամեն ինչ կանեն որ
                    ձեզ ապահովեն բարձորակ կրթությամբ և
                    ծառայություններով։ Երկար տարիների 
                    փորձը և բարձորակ աշխատանքային 
                    մոտեցումը կտա իր արդյունքը։  
                    </p>
                    </div>
                    </div>
                    <div id="hover2" className="section2__div_1">
                    <div className="section2__div_1_div">
                    <img src ={img2}></img>
                    <p className="section2__div_1_div_p1">Որակյալ աշխտանք</p>
                    <p id="p2" className="section2__div_1_div_p2">
                    Մեր պրոֆեսիոնալ աշխատակազմը երաշխավորում է բարձրորակ ծառայությունների մատուցում։
                    Եթե դուք վստահելեք ձեր աշխատանքը մեր թիմին ապա կարող եք վստահ լինել որ արդյունքը ձեզ կհոգանցի։  
                    </p>
                    </div>
                    </div>
                    <div id="hover3" className="section2__div_1">
                    <div className="section2__div_1_div">
                    <img id="img3" src ={img3}></img>
                    <p className="section2__div_1_div_p1">Բարձրորակ կրթություն</p>
                    <p id="p3" className="section2__div_1_div_p2">
                    Մեր մասնագետները ամեն ինչ կանեն, որ ձեզ ապահովեն բարձրորակ կրթությամբ և ծառայություններով:
                     Երկար տարիների փորձը և բարձրորակ աշխատանքային մոտեցումը կտա իր արդյունքը:  
                    </p>
                    </div>
                    </div>
                </div>
            </section>
            <section id="section3" className="section2">
                <p className="section2__p1">ֆակուլտետներ</p>
                <div className="section2__div">
                    <div id="section2__hover1" className="section2__div_2">
                    
                    <img id="section2__div_1_img1" src ={img4} className="section2__div_1_img"></img>
                    <img id="section2__div_1_img1_1" src ={img13} className="section2__div_1_1img"></img>
                    <p id="section2__div_2_div_txt1" className="section2__div_2_div_p1">Վեբ ծրագրավորման<br/><span>Ֆակուլտետ</span></p>
                    <ul class="fak11">
                    <li>Front End</li>
                    <li>Back End</li>
                    <li>Full Stack</li>
                    </ul>
                
                    <img src ={img7} className="section2__div_1_img2"></img>

                    </div>
                    
                    <div id="section2__hover2" className="section2__div_2">
                    
                    <img id="section2__div_1_img2" src ={img5} className="section2__div_1_img"></img>
                    <img id="section2__div_1_img1_1" src ={img14} className="section2__div_1_1img"></img>
                    <p className="section2__div_2_div_p1">Ծրագրավորման<br/><span>Ֆակուլտետ</span></p>
                    <ul class="fak11">
                    <li>Front End</li>
                    <li>Back End</li>
                    <li>Full Stack</li>
                    </ul>
                
                    <img src ={img8} className="section2__div_1_img2"></img>

                    </div>
                    
                    <div id="section2__hover3" className="section2__div_2">
                    
                    
                    <img id="section2__div_1_img3" src ={img6} className="section2__div_1_img"></img>
                    <img id="section2__div_1_img1_1" src ={img15} className="section2__div_1_1img"></img>
                    <p className="section2__div_2_div_p1">Մուլտիմեդիայի<br/><span>Ֆակուլտետ</span></p>
                    <ul class="fak11">
                    <li>Front End</li>
                    <li>Back End</li>
                    <li>Full Stack</li>
                    </ul>
                
                    <img src ={img9} className="section2__div_1_img2"></img>
                    
                    </div>
                    
                </div>
            </section>
            <section id="section3" className="section2">
                <p className="section2__p1">Թոփ դասընթացներ
                </p>
                <div className="section2__div">
                    <div className="section2__div_3">
                    

                    <p className="section2__div_3_div_p1">Դպրոցականների<br/> 
                    համար</p>
                    <img src ={img10} className="section2__div_3_img"></img>
                    <img src ={img16} className="section2__div_3_1img"></img>
                    
                    </div>
                    
                    <div className="section2__div_3">
                    

                    <p className="section2__div_3_div_p1">Քոլեջների ուսանողների<br/> 
                    համար</p>
                    <img src ={img11} className="section2__div_3_img"></img>
                    <img src ={img17} className="section2__div_3_1img"></img>

                    </div>
                    
                    <div className="section2__div_3">

                    <p className="section2__div_3_div_p1">Համալսարանի ուսանողների<br/> 
                    համար</p>
                    <img src ={img12} className="section2__div_3_img"></img>
                    <img src ={img18} className="section2__div_3_1img"></img>
                    
                    </div>
                    
                </div>
            </section>
            <section id="section4" className="section3">
                <p className="section2__p1">Ծառայություններ
                </p>
                <div className="section2__div">
                    <div className="section2__div_4">
                    
                    <img src={img23} className="gifer" />
                    <div className="section2__div_4_div">
                    <p className="section2__div_4_div_p1">Վեբ կայքերի <br/> 
                    պատրաստում</p>
                    <button className="section2__div_4_div_button">Պատվիրել</button>
                    </div>
                    
                    </div>
                    
                    <div className="section2__div_4">
                    
                    <img src={img21} className="gifer" />
                    <div className="section2__div_4_div">
                    <p className="section2__div_4_div_p1">Բջջային <br/> 
                    հավելվածներ</p>
                    <button className="section2__div_4_div_button">Պատվիրել</button>
                    </div>

                    </div>
                    
                    <div className="section2__div_4">
                    <img src={img19} className="gifer" />
                    <div className="section2__div_4_div">
                    <p className="section2__div_4_div_p1">Համակարգչային <br/> 
                    հավելվածներ</p>
                    <button className="section2__div_4_div_button">Պատվիրել</button>
                    </div>
                    
                    </div>
                    
                </div>
                <div className="section2__div">
                    <div className="section2__div_4">
                    
                    <img src={img22} className="gifer" />
                    <div className="section2__div_4_div">
                    <p className="section2__div_4_div_p1">Խաղերի <br/> 
                    ծրագրավորում</p>
                    <button className="section2__div_4_div_button">Պատվիրել</button>
                    </div>
                    
                    </div>
                    
                    <div className="section2__div_4">
                    
                    <img src={img20} className="gifer" />
                    <div className="section2__div_4_div">
                    <p className="section2__div_4_div_p1">Վեբ և գրաֆիկ<br/> 
                    դիզայն</p>
                    <button className="section2__div_4_div_button">Պատվիրել</button>
                    </div>

                    </div>
                    
                    <div className="section2__div_4">
                    <img src={img24} className="gifer" />
                    <div className="section2__div_4_div">
                    <p className="section2__div_4_div_p1">ՍԵՕ և ՍՄՄ<br/> 
                    առաջխաղացում</p>
                    <button className="section2__div_4_div_button">Պատվիրել</button>
                    </div>
                    
                    </div>
                </div>

            </section>
            <div className="takibuttonidiv">
            <button className="takibutton">Իմանալ ավելին</button>
            </div>
            <section id="section5" className="section4">
                <div className="section4__div">
                    <img src={img25} className="section4__img"></img>
                    
                </div>
                <div className="section4__div_div">
                        <p>Բաժանորդագրվել</p>
                        <form action="">
                            <input type="email" placeholder="Էլ․փոստ" />
                        </form>
                        <button>Բաժանորդագրվել</button>
                </div>
            </section>
           
            </div>)
    }
}
export default Comp2
