import { AppLink } from 'shared/ui/AppLink/AppLink';

import cls from './VideoPage.module.scss';

type VideoData = {
  title: string;
  image: string;
  genre: string[];
};
interface VideoPageProps {
  data?: VideoData;
}
const VideoPage = ({ data }: VideoPageProps) => {
  const { title, image, genre } = data;

  return (
    <div className={cls['single-video']}>
      <img src={image} alt={title} className={cls['single-video__img']} />
      <div className={cls['single-video__info']}>
        <h2 className={cls['single-video__name']}>{title}</h2>
        <p className={cls['single-video__descr']}>{}</p>
        <p className={cls['single-video__descr']}>{}</p>
        <p className={cls['single-video__descr']}></p>
        {genre.map((item) => (
          <div className={cls['single-video__genre']}>{item}</div>
        ))}
      </div>
      <AppLink to='/' className={cls['single-video__back']}>
        Back to all
      </AppLink>
    </div>
  );
};

export default VideoPage;
