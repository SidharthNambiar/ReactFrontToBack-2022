import Card from './shared/Card';
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';

function FeedbackItem({ item, handleDelete }) {
  // state is no longer needed since data is coming through props

  //set state
  // const [rating, setRating] = useState(item.rating)
  // const [text, setText] = useState(item.text)

  

  return (
    <Card >
      <div className='num-display'>{item.rating}</div>
      <button onClick={()=>handleDelete(item.id)} className="close">
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,

}

export default FeedbackItem;
