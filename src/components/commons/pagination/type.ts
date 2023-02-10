import {Dictionary} from '@src/utils/commons/type';
import {ReactNode} from 'react';

export interface PaginationProps {
  // data?: T[];
  baseUrl?: string;
  prefixUrl?: string;
  queryString?: Partial<{
    [key: string]: string | number;
  }> & {pageSize: number};
  render?: (item: any) => ReactNode;
  position?: 'top' | 'bottom';
  isScroll?: boolean;
  returnStatus?: number[];
  header?: Dictionary;
  refetch?: boolean;
}
