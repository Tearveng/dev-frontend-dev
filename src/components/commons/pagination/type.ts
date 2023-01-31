import {ReactNode} from 'react';

export interface PaginationProps {
  // data?: T[] | undefined;
  baseUrl?: string | undefined;
  prefixUrl?: string | undefined;
  queryString?: Partial<{
    [key: string]: string | number;
  }> & {pageSize: number};
  render?: (items: any) => ReactNode | undefined;
  position?: 'top' | 'buttom';
  isScroll?: boolean;
  // isServer?: boolean | undefined;
}
