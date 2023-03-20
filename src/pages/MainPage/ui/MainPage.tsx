import Header from 'shared/ui/Header/Header';
import VideoList from 'widgets/VideoList';

const MainPage = () => {
  return (
    <>
      <Header content='НАШИ ВИДЕО' />;
      <VideoList />
    </>
  );
};

export default MainPage;
