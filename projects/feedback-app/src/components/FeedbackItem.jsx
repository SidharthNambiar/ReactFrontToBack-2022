import {useState  } from 'react';

function FeedbackItem({item}) {

  
// state is no longer needed since data is coming through props
  
  //set state
  // const [rating, setRating] = useState(item.rating)
  // const [text, setText] = useState(item.text)
  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
  );
}

export default FeedbackItem;
