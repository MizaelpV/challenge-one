import CardComment from './CardComment';
import data from '../data/data';
import ReplyComment from './ReplyComment';

const FeedComments = () => {
  return (
    <>
      {data.map(({ comments }) => {
        return comments.map(
          ({
            score,
            content,
            createdAt,
            id,
            user: {
              image: { png },
              username,
            },
          }) => {
            return (
              <div className='w-8/12 border mx-auto'>
                <div key={id} className='flex justify-center'>
                  <CardComment
                    content={content}
                    score={score}
                    createdAt={createdAt}
                    id={id}
                    username={username}
                  />
                </div>
              </div>
            );
          }
        );
      })}
      <ReplyComment />
    </>
  );
};

export default FeedComments;
