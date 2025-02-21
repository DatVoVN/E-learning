import { IconExplore, IconPlay } from '@/components/icons';
import { TMenuItem } from '@/components/types';

export const MenuItems: TMenuItem[] = [
  {
    url: '/',
    title: 'Khám phá',
    icon: <IconPlay className="size-5" />,
  },
  {
    url: '/study',
    title: 'Khu vực học tập',
    icon: <IconExplore className="size-5" />,
  },
  {
    url: '/manager/course',
    title: 'Quản lý khóa học',
    icon: <IconExplore className="size-5" />,
  },
  {
    url: '/manage/member',
    title: 'Quản lý thành viên',
    icon: <IconExplore className="size-5" />,
  },
  {
    url: '/manage/comment',
    title: 'Quản lý đơn hàng',
    icon: <IconExplore className="size-5" />,
  },
];
