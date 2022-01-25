import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  score: number;
  createdAt: string;
  content: string;
  img?: string;
  username: string;
  id: number;
}

const CardComment: React.FC<Props> = ({
  score,
  img,
  createdAt,
  content,
  username,
}) => {
  const [count, setCount] = useState<number>(0);

  const increaseLikes = () => {
    return setCount(count + 1);
  };
  const decreaseLikes = () => {
    if (count === 0) return;
    return setCount(count - 1);
  };

  return (
    <div className='cursor-pointer shadow-blue-100 shadow hover:shadow-blue-300 hover:shadow-sm rounded-xl pt-8 lg:px-6 w-3/5 mx-auto flex gap-4 bg-white my-5  lg:h-44'>
      <div className='w-14  ml-3 h-28 px-3 rounded-xl flex flex-col items-center justify-around bg-sky-100 relative rigth-0'>
        <FontAwesomeIcon
          className='text-sky-400 hover:text-sky-500'
          icon={faPlus}
          onClick={increaseLikes}
        />
        <span className='text-indigo-700 font-bold'>{score}</span>
        <FontAwesomeIcon
          className='text-sky-400 hover:text-sky-500'
          icon={faMinus}
          onClick={decreaseLikes}
        />
      </div>
      <div>
        <div className='flex items-center justify-between ml-4'>
          <div className='flex items-center '>
            <img
              className='w-10 rounded-full mr-4'
              src={require(`../assets/images/image-amyrobson.png`)}
              alt='profileImage'
            />
            <span className='mr-3 font-semibold hover:underline'>
              {username}
            </span>
            <span className='mr-3 text-gray-500 '>{createdAt}</span>
          </div>
          <div className='text-indigo-700 hover:text-indigo-500 font-semibold px-6 gap-3 flex items-center h-10'>
            <FontAwesomeIcon icon={faReply} />
            <span>Reply</span>
          </div>
        </div>
        <div className='w-11/12 mt-2 text-justify ml-4'>
          <p className='lg:text-lg text-gray-500'>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComment;
