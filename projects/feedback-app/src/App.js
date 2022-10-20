import Header from './components/Header';
import FeebackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from "uuid"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Do you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    
    newFeedback.id = uuidv4();
    //state is immutable, you can't push on to it.
    // you have to copy the original array, add to it, and then set it as the new state
    setFeedback([newFeedback, ...feedback])

  }
  return (
    <>
      <Header />

      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeebackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
