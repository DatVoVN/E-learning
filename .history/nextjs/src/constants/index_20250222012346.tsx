import { IconExplore, IconPlay } from '@/components/icons';
import IconOrder from '@/components/icons/IconOrder';
import IconStudy from '@/components/icons/IconStudy';
import { TMenuItem } from '@/components/types';

export const MenuItems: TMenuItem[] = [
  {
    url: '/',
    title: 'Khám phá',
    icon: <IconExplore className="size-5" />,
  },
  {
    url: '/study',
    title: 'Khu vực học tập',
    icon: <IconStudy className="size-5" />,
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
    url: '/manage/order',
    title: 'Quản lý đơn hàng',
    icon: <IconOrder className="size-5" />,
  },
  {
    url: '/manage/member',
    title: 'Quản lý thành viên',
    icon: <IconExplore className="size-5" />,
  },
];
