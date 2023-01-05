import {$ok} from '.';
import {INT32_MIN, UINT32_MAX} from './type';

export function $icast(v: number): number {
  return v >= 0
    ? v <= UINT32_MAX
      ? v | 0
      : Math.floor(v)
    : v >= INT32_MIN
    ? -(-v | 0)
    : -Math.floor(-v);
}

export function $isnumber(o: any): boolean {
  return $ok(o) && typeof o === 'number' && !isNaN(o) && isFinite(o);
}
