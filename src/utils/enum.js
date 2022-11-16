import { BiServer, BiGitPullRequest, BiGroup } from 'react-icons/bi';

export const routerPath = {
  // Role
  ADMIN: `admin`,

  // Auth
  AUTH: `auth`,
  LOGIN: `login`,
};

export const menu = [
  {
    path: `/admin/services`,
    title: 'dịch vụ',
    icon: BiServer,
  },
  {
    path: `/admin/requests`,
    title: 'yêu cầu dịch vụ',
    icon: BiGitPullRequest,
  },
  {
    path: `/admin/customers`,
    title: 'khách hàng',
    icon: BiGroup,
  },
  {
    path: `/admin/employees`,
    title: 'nhân viên',
    icon: BiGroup,
  },
];

export const menuUser = [
  {
    path: '/',
    title: 'trang chủ',
  },
  {
    path: '/services',
    title: 'dịch vụ',
  },
  {
    path: '/about',
    title: 'giới thiệu',
  },
];

export const customerTableHeader = ['customer', 'email', 'phone', 'age', 'action'];

export const LocalStorageAuth = {
  ACCESS_TOKEN: 'access_token',
  USER_PROFILE: 'user_profile',
};

export const listFilterServices = ['Mặc định', 'Tăng dần', 'Giảm dần'];
