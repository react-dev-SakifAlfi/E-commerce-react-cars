import { useEffect, useState } from 'react';
import './App.css'
import { IoMdStar } from "react-icons/io";
import prdcts from './Prdcts';

function App() {


  const sender = (carfanz) => {
    const filterData = prdcts.filter((carz) => {


      return carz.category == carfanz
    })


    setData(filterData)


  }

  const [data, setData] = useState(prdcts)

  useEffect(() => {

    let singel_food_card = document.querySelectorAll('.singel_food_card')


    singel_food_card.forEach((item) => {
      item.classList.add('animationData')
    })

  }, [data])

  return (
    <>

      <div className="container">
        <nav className='flex space-x-[170px] justify-center '>
          <div className="logo">
            <img src="https://static.vecteezy.com/system/resources/previews/006/227/054/non_2x/car-shop-logo-design-template-element-usable-for-business-and-automotive-logos-vector.jpg" className='w-[190px] h-[150px] rounded-full' alt="logo" />
          </div>
          <div className="py-8 px-10 bg-[#5b5b5b] flex justify-end gap-5 mb-10 mt-10">
            <button onClick={() => setData(prdcts)} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#4ea5c2] hover:text-white active:scale-[1.1]'>All</button>
            <button onClick={() => sender('Sports Car')} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#4ea5c2] hover:text-white active:scale-[1.1]'>Sports Car</button>
            <button onClick={() => sender('Luxury Sports Car')} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5c6574] transition-[.4s] hover:bg-[#4ea5c2] hover:text-white active:scale-[1.1]'>Luxury Sports Car</button>
            <button onClick={() => sender('Supercar')} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#4ea5c2] hover:text-white active:scale-[1.1]'>Supercar</button>
            <button onClick={() => sender('Electric Car')} className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#4ea5c2] hover:text-white active:scale-[1.1]'>Electric Car</button>
          </div>
        </nav>
        <div className="allCards flex gap-5 flex-wrap justify-center">
          {
            data.map((item) => (
              <div key={item.name} className="singel_food_card bg-[#5b5b5b] ">
                <div className=" product_image rounded w-[300px] h-[300px] px-[35px] py-[50px] bg-[#5b5b5b] mb-5 ">
                  {item.discount_price && <div className="  w-[70px] h-[30px] text-md font-bold text-[#000] bg-[#FFB539] flex justify-center items-center">SALE!!!</div>}

                  <img src={item.image} alt="Food Image" className='rounded-lg w-[250px] h-[200x]' />
                </div>
                <div className="card_text">
                  <ul className='flex gap-1 justify-center '>
                    <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                    <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                    <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                    <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                    <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                  </ul>
                  <div className='card_text flex flex-col items-center mt-5'>
                    <h2 className='text-[23px]   font-playwrite  mb-5 '>{item.name}</h2>
                    <p className='text-lg font-bold  text-[#FFB539]'>${item.discount_price ? item.discount_price : item.price}<span className='text-[#5c4318] ml-5 line-through'>{item.discount_price && item.price}</span></p>
                  </div>
                </div>
              </div>
            ))

          }
        </div>
      </div>

    </>
  )
}
export default App
