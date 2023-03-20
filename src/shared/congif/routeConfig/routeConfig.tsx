import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import VideoPage from 'pages/VideoPage';
import { RouteProps } from 'react-router-dom';

export enum AppRouters {
  MAIN = 'main',
  VIDEO_PAGE = 'video',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.VIDEO_PAGE]: 'video/:id',
  [AppRouters.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  [AppRouters.VIDEO_PAGE]: {
    path: RoutePath.video,
    element: <VideoPage />,
  },
  [AppRouters.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
