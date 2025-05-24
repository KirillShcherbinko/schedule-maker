import { useTranslation } from 'react-i18next';
import Commentator1 from './assets/commentator-1.jpg';
import Commentator2 from './assets/commentator-2.jpg';
import Commentator3 from './assets/commentator-3.jpg';
import { BASE_NAMESPACE } from '../../model/consts';
import { Card } from '@/shared/ui/Card';

type TComment = {
  author: string;
  text: string;
};

const BASE_LINK = 'home.comments';
const commentators = [Commentator1, Commentator2, Commentator3];

export const Comments = () => {
  const { t } = useTranslation();
  const reviews = t(`${BASE_LINK}.reviews`, { returnObjects: true, ns: 'home' }) as TComment[];

  return (
    <section className="flex flex-col gap-5">
      <h2 className="font-bold text-4xl text-center">{t(`${BASE_LINK}.title`, BASE_NAMESPACE)}</h2>
      <div className="flex flex-col items-center gap-3">
        {reviews.map((review, index) => (
          <Card className="flex flex-row items-center gap-4 p-4 w-full">
            <img
              className="w-[80px] aspect-square rounded-full object-cover"
              src={commentators[index]}
              alt={review.author}
            />
            <div className="flex flex-col">
              <h5 className="font-bold text-xl">{review.author}</h5>
              <p className="text-md">{review.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
