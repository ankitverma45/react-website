import React from "react";
import "./Section.css";
import Image from "./../Image/image-1.jpeg";
import Image1 from "./../Image/Image1.jpg"
import Image2 from "./../Image/image2.jpg"
import Image3 from "./../Image/image3.jpeg"
import Image4 from "./../Image/image4.jpg"
import Image5 from "./../Image/image5.jpg"
import Image6 from "./../Image/image6.jpg"
import Image7 from "./../Image/image7.jpg"
import Image8 from "./../Image/image8.png"
import Image9 from "./../Image/image9.webp";
import Image10 from "./../Image/image10.jpg"
import Image11 from "./../Image/image11.webp"
import Image12 from "./../Image/image12.jpg"
import Image13 from "./../Image/image13.webp"
import Image14 from "./../Image/image14.webp"
import Image15 from "./../Image/image15.jpg"
import Image16 from "./../Image/image16.jpg"

const data1=[
  {
    id:1,
    Image:Image1,
    name:"SECIR"
  },
  {
    id:2,
    Image:Image2,
    name:"SOCIAL"
  },
  {
    id:3,
    Image:Image3,
    name:"MARVEL"
  },
  {
    id:4,
    Image:Image4,
    name:"ELBOUGH"
  }
]
const data2=[
  {
    id:1,
    Image:Image5,
    name:"CHATTEL"
  },
  {
    id:2,
    Image:Image6,
    name:"VISTAS"
  },
  {
    id:3,
    Image:Image7,
    name:"AMIRA",
  },
  {
    id:4,
    Image:Image8,
    name:"ABODE"
  }
]
const data3=[
  {
    id:1,
    Image:Image9
  },
  {
    id:2,
    Image:Image10
  },
  {
    id:3,
    Image:Image11
  },
  {
    id:4,
    Image:Image12
  },
  {
    id:1,
    Image:Image13
  },
  {
    id:2,
    Image:Image14
  },
  {
    id:3,
    Image:Image15
  },
  {
    id:4,
    Image:Image16
  }
]

const Section = () => {

  const data=data1.map((value)=>{
    return (<div className="card-category">
    <img src={value.Image} alt="" className="img-cate" />
    <div className="pppp"></div>
    <h3 className="title-cate">{value.name}</h3>
  </div> )
  })
  const dataa=data2.map((value)=>{
    return (<div className="card-category">
    <img src={value.Image} alt="" className="img-cate" />
    <div className="pppp"></div>
    <h3 className="title-cate">{value.name}</h3>
  </div> )
  })
  const dataaa=data3.map((value)=>{
    return (<div className="card-category">
    <img src={value.Image} alt="" className="img-cate" />
    <div className="pppp"></div>
  </div> )
  })

  return (
    <>
      <div className="bgImage-2">
        <div className="section">
          <div className="section-first">Premium Kitchens</div>
          <div className="section-second">
            Luxury components.Seamless design.
          </div>
          <div className="section-three">Cooking spaces with a personality</div>
          <button>Read More</button>
        </div>
        <div className="full-container full-container2">
           {data}
        </div>
        <div className="section">
          <div className="section-first">Magnificent Wardrobes</div>
          <div className="section-second">
            Astonishing Designs, Baspoke craftsmanship.
          </div>
          <div className="section-three">Durability at its best</div>
          <button>Read More</button>
        </div>
        <div className="full-container full-container2">
            {dataa}
        </div>
        <div className="section">
          <div className="section-first">Gallery</div>
        </div>
        <div className="full-container full-container2">
          {dataaa}
        </div>
        <div className="section">
          <div className="section-first">Clients Review</div>
          <div className="youtube">
            <iframe
              width="1100"
              height="500"
              src="https://www.youtube.com/embed/aDOXMyqKAK8"
              title="Kitchen was made up to the mark"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="container contact" id="contact">
          <div className="contact-me">
            <div className="touch">Get in touch</div>
            <div className="contact-mee">Contact Us</div>
            <div>
              we would love for you to visit the studio and explore our range of
              design
            </div>
            <div>
              as well as the endless possibilities of customizing your space at
              home
            </div>
            <div className="address">
              Address:136, Adhyaru Industrial Estate, Sunmil Compound, Lower
              Parel
            </div>
            <div>Mumbai 400013</div>
            <div>Phone: +919851365136</div>
            <div>Email:info@donaindia.com</div>
          </div>
          <div className="input-text">
            <form className="input-text">
              <input type="text" placeholder="Name:" className="nam"></input>
              <input type="text" placeholder="Email:" className="ema"></input>
              <input
                type="text"
                placeholder="Phone No::"
                className="ema"
              ></input>
              <textarea
                type="text"
                placeholder="what are you looking for.."
                className="mess"
              ></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section;
