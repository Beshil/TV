import { useState, useEffect, ComponentType } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import useVideoService from '../../../services/VideoService';
import { PageLoader } from 'widgets/PageLoader';
import { PageError } from 'widgets/PageError';
import cls from './VideoList.module.scss';

const setContent = (process: string, Component: ComponentType) => {
  switch (process) {
    case 'waiting':
      return <PageLoader />;
    case 'confirmed':
      return <Component />;
    case 'error':
      return <PageError />;
    default:
      throw new Error('Unexpected process state');
  }
};

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);

  const { getAllVideo, process, setProcess } = useVideoService();

  useEffect(() => {
    onRequest();
    // eslint-disable-next-line
  }, []);

  const onRequest = () => {
    getAllVideo()
      .then(onVideoListLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onVideoListLoaded = (newVideoList: []) => {
    setVideoList([...videoList, ...newVideoList]);
  };

  function renderItems(arr: any[]) {
    const items = arr.map((item) => {
      return (
        <li className={cls.video__item} key={item.id}>
          <AppLink to={`/video/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className={cls['video__item-img']}
            />
            <div className={cls['video__item-name']}>{item.title}</div>
            <div className={cls['video__item-subtitle']}>
              {item.description}
            </div>
            <div className={cls.hide}>
              <p className={cls['video__item-description']}>{item.text}</p>
              <a href={item.detail} className={cls['video__item-link']}>
                Смотреть
              </a>
            </div>
          </AppLink>
        </li>
      );
    });

    return <ul className={cls['video__grid']}>{items}</ul>;
  }

  return (
    <div className={cls['video__list']}>
      {setContent(process, () => renderItems(videoList))}
    </div>
  );
};

export default VideoList;
