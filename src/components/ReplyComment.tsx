import '../assets/styles/ReplyComments.css';
import CardComment from './CardComment';

const ReplyComment = () => {
  return (
    <>
      <div className='w-8/12 mx-auto border border-blue-700'>
        <div className='border flex flex-col justify-end bg-yellow-300'>
          <CardComment
            score={13}
            content='If you are still new, I would recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It is very tempting to jump ahead but lay a solid foundation first.'
            createdAt='20 minutes ago'
            id={29}
            username='MizaelPV'
          />
          <CardComment
            score={13}
            content='If you are still new, I would recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It is very tempting to jump ahead but lay a solid foundation first.'
            createdAt='20 minutes ago'
            id={29}
            username='MizaelPV'
          />
        </div>
      </div>
    </>
  );
};

export default ReplyComment;
