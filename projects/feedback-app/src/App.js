import Header from './components/Header';
import FeebackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className='container'>
        {/* passing feedback items array to feedback component */}
        <FeebackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
