//
import HomeV2 from '@/pages/homev2/HomeV2';

import { Navigate } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    element: <Navigate to="/portal" />,
  },
  {
    path: '/portal',
    element: <HomeV2 />,
    title: '综合首页',
  },
];
