export const getCurrentDayTimestamp = (): number => Date.now();
export const isToday = (_timestamp: number): boolean => true;
export const isYesterday = (_timestamp: number): boolean => false;
