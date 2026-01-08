/**
 * TypeScript 工具函数
 * 演示常用的类型安全函数和最佳实践
 */

import type { User, ApiResponse, Nullable, Maybe } from '@/types';

// ==================== 泛型函数示例 ====================

/**
 * 获取数组的第一个元素
 */
export function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

/**
 * 获取数组的最后一个元素
 */
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

/**
 * 深拷贝函数
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 延迟执行函数
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ==================== 类型守卫（Type Guards） ====================

/**
 * 检查值是否为 null 或 undefined
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * 检查值是否不为 null 和 undefined
 */
export function isNotNil<T>(value: T | null | undefined): value is T {
  return !isNil(value);
}

/**
 * 检查值是否为字符串
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * 检查值是否为数字
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * 检查 API 响应是否成功
 */
export function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is ApiResponse<T> & { code: 200 } {
  return response.code === 200;
}

// ==================== 数组操作 ====================

/**
 * 过滤数组中的 null 和 undefined
 */
export function compact<T>(arr: (T | null | undefined)[]): T[] {
  return arr.filter(isNotNil);
}

/**
 * 数组去重
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/**
 * 根据键去重
 */
export function uniqueBy<T, K extends keyof T>(arr: T[], key: K): T[] {
  const seen = new Set<T[K]>();
  return arr.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

// ==================== 对象操作 ====================

/**
 * 从对象中选取指定的键
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * 从对象中排除指定的键
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result as Omit<T, K>;
}

// ==================== 实用函数 ====================

/**
 * 防抖函数
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * 格式化日期
 */
export function formatDate(date: Date | number | string): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 截断字符串
 */
export function truncate(str: string, maxLength: number, suffix = '...'): string {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - suffix.length) + suffix;
}

// ==================== 业务函数示例 ====================

/**
 * 获取用户显示名称
 */
export function getUserDisplayName(user: Nullable<User>): string {
  if (!user) return '未知用户';
  return user.name || user.email || `用户${user.id}`;
}

/**
 * 检查用户是否为管理员
 */
export function isAdmin(user: Maybe<User>): boolean {
  return user?.role === 'admin';
}
