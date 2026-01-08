/**
 * typeHelpers 工具函数测试
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  first,
  last,
  deepClone,
  delay,
  isNil,
  isNotNil,
  isString,
  isNumber,
  compact,
  unique,
  uniqueBy,
  pick,
  omit,
  debounce,
  formatDate,
  truncate,
  getUserDisplayName,
  isAdmin,
} from '../typeHelpers';
import type { User } from '@/types';

// ==================== 泛型函数测试 ====================

describe('泛型函数', () => {
  describe('first', () => {
    it('应该返回数组的第一个元素', () => {
      expect(first([1, 2, 3])).toBe(1);
      expect(first(['a', 'b', 'c'])).toBe('a');
    });

    it('空数组应该返回 undefined', () => {
      expect(first([])).toBeUndefined();
    });
  });

  describe('last', () => {
    it('应该返回数组的最后一个元素', () => {
      expect(last([1, 2, 3])).toBe(3);
      expect(last(['a', 'b', 'c'])).toBe('c');
    });

    it('空数组应该返回 undefined', () => {
      expect(last([])).toBeUndefined();
    });
  });

  describe('deepClone', () => {
    it('应该深拷贝对象', () => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = deepClone(obj);

      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
    });

    it('应该深拷贝数组', () => {
      const arr = [1, 2, [3, 4]];
      const cloned = deepClone(arr);

      expect(cloned).toEqual(arr);
      expect(cloned).not.toBe(arr);
    });
  });

  describe('delay', () => {
    it('应该在指定时间后resolve', async () => {
      const start = Date.now();
      await delay(100);
      const end = Date.now();

      // 允许1-2ms的误差
      expect(end - start).toBeGreaterThanOrEqual(99);
    });
  });
});

// ==================== 类型守卫测试 ====================

describe('类型守卫', () => {
  describe('isNil', () => {
    it('null 和 undefined 应该返回 true', () => {
      expect(isNil(null)).toBe(true);
      expect(isNil(undefined)).toBe(true);
    });

    it('其他值应该返回 false', () => {
      expect(isNil(0)).toBe(false);
      expect(isNil('')).toBe(false);
      expect(isNil(false)).toBe(false);
      expect(isNil([])).toBe(false);
      expect(isNil({})).toBe(false);
    });
  });

  describe('isNotNil', () => {
    it('非 null 和 undefined 的值应该返回 true', () => {
      expect(isNotNil(0)).toBe(true);
      expect(isNotNil('')).toBe(true);
      expect(isNotNil(false)).toBe(true);
    });

    it('null 和 undefined 应该返回 false', () => {
      expect(isNotNil(null)).toBe(false);
      expect(isNotNil(undefined)).toBe(false);
    });
  });

  describe('isString', () => {
    it('字符串应该返回 true', () => {
      expect(isString('')).toBe(true);
      expect(isString('hello')).toBe(true);
    });

    it('非字符串应该返回 false', () => {
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('数字应该返回 true', () => {
      expect(isNumber(0)).toBe(true);
      expect(isNumber(123)).toBe(true);
      expect(isNumber(-456)).toBe(true);
    });

    it('NaN 应该返回 false', () => {
      expect(isNumber(NaN)).toBe(false);
    });

    it('非数字应该返回 false', () => {
      expect(isNumber('123')).toBe(false);
      expect(isNumber(null)).toBe(false);
    });
  });
});

// ==================== 数组操作测试 ====================

describe('数组操作', () => {
  describe('compact', () => {
    it('应该过滤掉 null 和 undefined', () => {
      const arr = [1, null, 2, undefined, 3, null];
      expect(compact(arr)).toEqual([1, 2, 3]);
    });

    it('应该保留 0、false、空字符串', () => {
      const arr = [0, false, '', null, undefined];
      expect(compact(arr)).toEqual([0, false, '']);
    });
  });

  describe('unique', () => {
    it('应该数组去重', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    it('空数组应该返回空数组', () => {
      expect(unique([])).toEqual([]);
    });
  });

  describe('uniqueBy', () => {
    it('应该根据键去重', () => {
      const arr = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 1, name: 'c' },
      ];
      const result = uniqueBy(arr, 'id');

      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({ id: 1, name: 'a' });
      expect(result[1]).toEqual({ id: 2, name: 'b' });
    });
  });
});

// ==================== 对象操作测试 ====================

describe('对象操作', () => {
  describe('pick', () => {
    it('应该选取指定的键', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('不存在的键应该被忽略', () => {
      const obj = { a: 1, b: 2 };
      expect(pick(obj, ['a', 'c' as 'a'])).toEqual({ a: 1 });
    });
  });

  describe('omit', () => {
    it('应该排除指定的键', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
    });
  });
});

// ==================== 实用函数测试 ====================

describe('实用函数', () => {
  describe('debounce', () => {
    it('应该防抖执行函数', async () => {
      const fn = vi.fn();
      const debouncedFn = debounce(fn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      expect(fn).not.toHaveBeenCalled();

      await delay(150);

      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('formatDate', () => {
    it('应该格式化日期为 YYYY-MM-DD', () => {
      const date = new Date('2024-01-05');
      expect(formatDate(date)).toBe('2024-01-05');
    });

    it('应该处理时间戳', () => {
      const timestamp = new Date('2024-12-25').getTime();
      expect(formatDate(timestamp)).toBe('2024-12-25');
    });
  });

  describe('truncate', () => {
    it('应该截断超长字符串', () => {
      const str = '这是一个很长的字符串';
      expect(truncate(str, 5)).toBe('这是...');
    });

    it('不超过最大长度的字符串应该保持不变', () => {
      const str = '短字符串';
      expect(truncate(str, 10)).toBe('短字符串');
    });

    it('应该支持自定义后缀', () => {
      const str = '很长的字符串';
      expect(truncate(str, 5, '~')).toBe('很长的字~');
    });
  });
});

// ==================== 业务函数测试 ====================

describe('业务函数', () => {
  let mockUser: User;

  beforeEach(() => {
    mockUser = {
      id: 1,
      name: '张三',
      email: 'zhangsan@example.com',
      age: 25,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  });

  describe('getUserDisplayName', () => {
    it('应该返回用户名', () => {
      expect(getUserDisplayName(mockUser)).toBe('张三');
    });

    it('用户名为空时应该返回邮箱', () => {
      mockUser.name = '';
      expect(getUserDisplayName(mockUser)).toBe('zhangsan@example.com');
    });

    it('用户名和邮箱都为空时应该返回用户ID', () => {
      mockUser.name = '';
      mockUser.email = '';
      expect(getUserDisplayName(mockUser)).toBe('用户1');
    });

    it('用户为 null 时应该返回"未知用户"', () => {
      expect(getUserDisplayName(null)).toBe('未知用户');
    });
  });

  describe('isAdmin', () => {
    it('管理员角色应该返回 true', () => {
      mockUser.role = 'admin';
      expect(isAdmin(mockUser)).toBe(true);
    });

    it('非管理员角色应该返回 false', () => {
      mockUser.role = 'user';
      expect(isAdmin(mockUser)).toBe(false);
    });

    it('用户为 null 时应该返回 false', () => {
      expect(isAdmin(null)).toBe(false);
    });
  });
});
