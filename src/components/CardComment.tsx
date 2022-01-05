import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  name: string;
  date: string;
  message: string;
}

const CardComment: React.FC<Props> = ({ name, date, message }) => {
  const [count, setCount] = useState<number>(0);

  const increaseLikes = () => {
    setCount(count + 1);
  };
  const decreaseLikes = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div className='border py-14 cursor-pointer hover:shadow-lg rounded-xl pt-8 lg:px-4 w-11/12 lg:w-3/5 mx-auto flex gap-4 bg-white mt-9 h-52 lg:h-48'>
      <div className='w-12 ml-3 h-28 px-3 rounded-xl flex flex-col items-center justify-around bg-sky-100 relative rigth-0'>
        <FontAwesomeIcon
          className='text-sky-400 hover:text-sky-500'
          icon={faPlus}
          onClick={increaseLikes}
        />
        <span className='text-indigo-700 font-bold'>{count}</span>
        <FontAwesomeIcon
          className='text-sky-400 hover:text-sky-500'
          icon={faMinus}
          onClick={decreaseLikes}
        />
      </div>
      <div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center '>
            <img
              className='w-10 rounded-full mr-4'
              src='https://media-exp1.licdn.com/dms/image/C5603AQGmdr_b-su1hQ/profile-displayphoto-shrink_100_100/0/1593215272440?e=1646870400&v=beta&t=F6DNoaXWd0st6or8YU-fv2-TBHIj_ztUluLh3fgwhe8'
              alt='phofilePic'
            />
            <span className='mr-3 font-semibold hover:underline'>{name}</span>
            <span className='mr-3 text-gray-500 '>{date}</span>
          </div>
          <div className='text-indigo-700 hover:text-indigo-500 font-semibold px-6 gap-3 flex items-center h-10'>
            <FontAwesomeIcon icon={faReply} />
            <span>Reply</span>
          </div>
        </div>
        <div className='w-11/12 mt-2 text-justify'>
          <p className='lg:text-lg text-gray-500'>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComment;
