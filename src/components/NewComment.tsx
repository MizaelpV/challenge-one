import React from 'react';

const CardComment = () => {
  const handleComment = (e: any) => {
    e.preventDefault();
    let comment = document.getElementById('comment') as HTMLInputElement;
    comment.value = '';
  };

  return (
    //container
    <div className='text-white text-center w-3/5 h-48 rounded-xl ml-auto mr-auto fixed inset-x-0 bottom-4 p-4 border hover:shadow-lg'>
      <div className='flex gap-3 justify-evenly ml-4 items-start h-full  mt-7'>
        <img
          className='w-11 rounded-full mr-4'
          src='https://media-exp1.licdn.com/dms/image/C5603AQGmdr_b-su1hQ/profile-displayphoto-shrink_100_100/0/1593215272440?e=1646870400&v=beta&t=F6DNoaXWd0st6or8YU-fv2-TBHIj_ztUluLh3fgwhe8'
          alt='phofilePic'
        />
        <textarea
          placeholder='Add a comment'
          className='border w-4/5 text-indigo-700 h-28 rounded-md p-3 text-md'
          id='comment'
        />
        <button
          className='bg-indigo-700 hover:bg-indigo-500 uppercase font-bold text-white border h-11 px-8  mr-3  rounded-md'
          onClick={handleComment}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CardComment;
