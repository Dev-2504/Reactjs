import React from 'react'
import Footer from "./Footer"
import Photo from './Photo';

export default function Content() {

    // Array Of Object
    let api = [
  {
    id: 0,
    brand: "Bewakoof",
    gender: "Men",
    categories: "T-Shirts",
    title: "Men's Black Batman Outline Logo Graphic Printed Oversized T-shirt",
    offer_price: 699,
    price: 1299,
    rating: 4.4,
    add_to_cart: true,
    image:
      "https://images.bewakoof.com/t1080/men-s-black-batman-outline-logo-graphic-printed-oversized-t-shirt-519159-1734686072-1.jpg",
  },
  {
    id: 1,
    brand: "Bewakoof",
    gender: "Men",
    categories: "Shirts",
    title: "Men's Rust Orange Checked Oversized Shirt",
    offer_price: 1499,
    price: 2499,
    rating: 4.6,
    add_to_cart: true,
    image:
      "https://images.bewakoof.com/t1080/men-s-rust-orange-checked-oversized-shirt-646373-1734610461-1.jpg",
  },
  {
    id: 2,
    brand: "Bewakoof",
    gender: "Men",
    categories: "T-Shirts",
    title: "Men's White Better & Better Graphic Printed Oversized T-shirt",
    offer_price: 599,
    price: 1299,
    rating: 4.5,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/men-s-white-better-better-graphic-printed-oversized-t-shirt-629620-1736761552-1.jpg",
  },
  {
    id: 3,
    brand: "Bewakoof",
    gender: "Men",
    categories: "Shirts",
    title: "Men's White & Blue Tie & Dye Oversized Shirt",
    offer_price: 449,
    price: 1599,
    rating: 4.6,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/men-s-white-blue-tie-dye-oversized-shirt-586224-1722596876-1.jpg",
  },
  {
    id: 4,
    brand: "Bewakoof",
    gender: "Women",
    categories: "T-Shirts",
    title: "Women's Blue Stardust Soul Graphic Printed Oversized T-shirt",
    offer_price: 599,
    price: 1499,
    rating: 4.7,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-blue-stardust-soul-graphic-printed-oversized-t-shirt-580622-1741326025-1.jpg",
  },
  {
    id: 5,
    brand: "Bewakoof",
    gender: "Women",
    categories: "Shirts",
    title: "Women's Light Olive Green Oversized Crop Shirt",
    offer_price: 499,
    price: 1899,
    rating: 4.5,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-light-olive-green-oversized-crop-shirt-633883-1745393640-1.jpg",
  },
  {
    id: 6,
    brand: "Bewakoof",
    gender: "Women",
    categories: "T-Shirts",
    title: "Women's Blue Inner Peace Graphic Printed Boyfriend T-shirt",
    offer_price: 399,
    price: 999,
    rating: 4.7,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-blue-inner-peace-graphic-printed-boyfriend-t-shirt-295707-1745902558-1.jpg",
  },
  {
    id: 7,
    brand: "Oxolloxo",
    gender: "Women",
    categories: "Shirts",
    title: "Women's Off White All Over Printed Shirt",
    offer_price: 1199,
    price: 1999,
    rating: 4.5,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-off-white-all-over-printed-shirt-671317-1744025214-1.jpg",
  },
  {
    id: 8,
    brand: "Bewakoof Air 1.0",
    gender: "Women",
    categories: "Joggers",
    title: "Women's Grey Oversized Joggers",
    offer_price: 899,
    price: 2049,
    rating: 4.4,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-grey-oversized-joggers-624641-1743589266-1.jpg",
  },
  {
    id: 9,
    brand: "Bewakoof",
    gender: "Women",
    categories: "Joggers",
    title: "Women's Green Oversized Joggers",
    offer_price: 999,
    price: 2699,
    rating: 4.6,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-green-oversized-cargo-joggers-649932-1743757429-1.jpg",
  },
];


  return (
    <>
    <div id='Content'>

<Photo />

    {api.map((e,i) => {
        //  <!-- Card -->
            return (<div style={{height: "500px"}} className="Card" key={i}>
                {/* <!-- Card Image --> */}
                <div className="card_img" style={{backgroundImage : `url(${e.image})`}}></div>
                {/* <!-- Card Content --> */}
                <div className="card_content">
                    <p className="card_title">{e.brand} <span><img src="Wishlist.svg" alt="" height="20px" width="20px" /></span></p>
                    <p className="card_des">{e.title}</p>
                    {/* { let discount = Math.floor(((e.price - e.offer_price) / e.price) * 100)} */}
                    <p className="card_price"><span className="card_act_price">{e.offer_price}</span><del className="card_price_des">{e.price}</del> <span className="card_price_per">{Math.floor(((e.price - e.offer_price) / e.price) * 100)}%</span></p>
                </div>
            </div>)
            {/* // <!-- Card Complete --> */}
    })}

    
    <Footer />
    </div>

    </>
  )
}
