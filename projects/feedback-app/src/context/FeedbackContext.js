import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // you can also use reducers
  const [feedback, setFeedback] = useState([
    { id: uuidv4(), text: 'This item is item 1', rating: 2 },
    { id: uuidv4(), text: 'This item is item 2', rating: 9 },
    { id: uuidv4(), text: 'This item is item 3', rating: 6 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm('Do you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //state is immutable, you can't push on to it.
    // you have to copy the original array, add to it, and then set it as the new state
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem} : item ))

  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
