import React from 'react';

const CardComment = () => {
  return (
    //container
    <div className='mt-96 border mx-auto  h-48 rounded-xl gap-3 justify-around items-center  w-3/5 flex'>
      <img
        className='w-11 rounded-full mr-4 h-11'
        src='https://media-exp1.licdn.com/dms/image/C5603AQGmdr_b-su1hQ/profile-displayphoto-shrink_100_100/0/1593215272440?e=1646870400&v=beta&t=F6DNoaXWd0st6or8YU-fv2-TBHIj_ztUluLh3fgwhe8'
        alt='phofilePic'
      />
      <input
        type='text'
        placeholder='Add a comment'
        className='border h-11  w-2/3'
      />
      <button className='border h-11 px-6'>Send</button>
    </div>
  );
};

export default CardComment;
