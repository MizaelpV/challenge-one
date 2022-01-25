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
              <div key={id}>
                <CardComment
                  content={content}
                  score={score}
                  createdAt={createdAt}
                  id={id}
                  username={username}
                />
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
