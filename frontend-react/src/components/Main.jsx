import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>This stock prediction application uses machine learning techniques, specifically
                employing Keras, and LSTM model integrated with Django framework. It forecasts future stock prices by 
                analysing 100 day and 200 days moving average, helping in making investment decisions.
            </p>
            {/* <a className='btn btn-outline-info' href="">Login</a> */}
            <Button text = 'Login' class = 'btn-outline-info'/>
        </div>

    </div>

    
    </>
  )
}

export default Main