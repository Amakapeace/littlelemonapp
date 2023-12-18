import React from 'react';
import { useHistory } from 'react-router-dom'; 
import { submitAPI } from './yourApiFile'; // Adjust the import based on your actual API file
import React from 'react';
import BookingForm from './BookingForm';

const Main = () => {
  const history = useHistory();

  
  const submitForm = async (formData) => {
    try {
      const result = await submitAPI(formData);

      if (result) {
        history.push('/confirmed');
      } else {
        
        console.log('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

function Component()
{
  return(
    <main>
      <Routes>
    <Route path="/"element={<Home/>}></Route>
    <Route path="/about"element={<About/>}></Route>
    <Route path="/menu"element={<Menu/>}></Route>
    <Route path="/reservations"element={<Reservations/>}></Route>
    <Route path="/order online"element={<OrderOnline/>}></Route>
    <Route path="/login"element={<Login/>}></Route>
</Routes>
import React, { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { availableTimesReducer } from './reducers';

const MainComponent = () => {
  const [date, setDate] = useState('');

  const updateTimes = (selectedDate) => {

    const updatedAvailableTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
    return updatedAvailableTimes;
  };


  const [availableTimes, dispatchAvailableTimes] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );


  useEffect(() => {
    const updatedTimes = updateTimes(date);
    dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: { availableTimes: updatedTimes)};
 [date])}
};

  return (
    <div>
      <h1>Main Component</h1>

      <BookingForm date={date} setDate={setDate} availableTimes={availableTimes} />
    </div>
  );
};

export de
    <main>
      <h2>Welcome to Your Website</h2>
      <p>This is the main content area of your webpage.</p>
    </main>
  <h1>Little Lemon</h1>
  <h2>Chicacgo</h2>
  <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
  <button onclick="alert('Button Clicked')">Reserve a table</button>
  <h3>This weeks specials!</h3>
  <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button onclick="alert('Button Clicked')">Online Menu</button>
          <h3>This week's specials!</h3>
          <div className="image-and-paragraph-container">
            <div>
              <img src="greek salad.svg" alt="Greek Salad" width="200" height="133" />
              <p>Greek salad $12.99 <br />
                The famous Greek salad of crispy lettuce,<br /> peppers, olives and our Chicago style feta cheese,<br /> garnished with crunchy garlic and rosemary croutons.<br />
                Order a delivery
              </p>
            </div>
            <div>
              <img src="bruchetta.svg" alt="Bruschetta" width="200" height="133" />
              <p>Bruschetta $5.99 <br />
                Our Bruschetta is made from grilled bread that <br /> has been smeared with garlic and seasoned with salt<br/> and olive oil.<br />
                Order a delivery
              </p>
            </div>
            <div>
              <img src="lemon dessert.svg" alt="Lemon Dessert" width="200" height="133" />
              <p>Lemon Dessert $5.00 <br />
                This comes straight from grandma's recipe book,<br /> every last ingredient has been sourced and <br /> is as authentic as can be imagined.<br />
                Order a delivery
              </p>
            </div>
          </div>

 </main>
  );
}
return (
  <div>
    {/* Your form components */}
    {/* ... */}

    {/* Call submitForm when the form is submitted */}
    <button onClick={() => submitForm(formData)}>Submit Form</button>
  </div>
);
};
const submitForm = async (formData) => {
};

return (
  <div>
    {/* Your other components */}
    {/* ... */}
    <BookingForm submitForm={submitForm} />
  </div>
);
};

export default Main;