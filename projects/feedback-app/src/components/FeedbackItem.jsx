import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackItem({ item }) {
  // state is no longer needed since data is coming through props

  //set state
  // const [rating, setRating] = useState(item.rating)
  // const [text, setText] = useState(item.text)

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={()=> editFeedback(item)} className='edit'>
        <FaEdit color='purple'/>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
