import { createBrowserRouter, Navigate } from 'react-router';
import { RecruitmentBoardPage } from './components/RecruitmentBoardPage';
import OldPlatformBoard from '../screens/old-platform/OldPlatformBoard';
import TransitionScreen from '../screens/transition/TransitionScreen';

export const router = createBrowserRouter([
  { path: '/',           element: <Navigate to="/old" replace /> },
  { path: '/old',        Component: OldPlatformBoard },
  { path: '/new',        Component: RecruitmentBoardPage },
  { path: '/transition', Component: TransitionScreen },
], { basename: import.meta.env.BASE_URL });
