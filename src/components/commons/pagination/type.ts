import {ReactNode} from 'react';

export interface PaginationProps {
  // data?: T[];
  baseUrl?: string;
  prefixUrl?: string;
  queryString?: Partial<{
    [key: string]: string | number;
  }> & {pageSize: number};
  render?: (items: any) => ReactNode;
  position?: 'top' | 'buttom';
  isScroll?: boolean;
  // isServer?: boolean;
}
