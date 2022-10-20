import { useState } from 'react';

function RatingSelect({select}) {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  };
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, ind) => (
        <li key={`rating-${ind + 1}`}>
          <input
            type='radio'
            name='rating'
            id={`num${ind + 1}`}
            value={`${ind + 1}`}
            onChange={handleChange}
            checked={selected === ind + 1}
          />
          <label htmlFor={`num${ind + 1}`}>{ind + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
