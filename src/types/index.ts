/**
 * 类型定义文件
 * 演示 TypeScript 工具类型和最佳实践
 */

// ==================== 基础类型定义 ====================

/**
 * 用户信息接口
 */
export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  avatar?: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
  updatedAt: Date;
}

/**
 * 文章信息接口
 */
export interface Article {
  id: number;
  title: string;
  content: string;
  author: User;
  tags: string[];
  publishedAt: Date | null;
  viewCount: number;
  likeCount: number;
}

/**
 * API 响应接口
 */
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  timestamp: number;
}

// ==================== 工具类型演示 ====================

/**
 * Partial 示例：所有属性变为可选
 * 用途：更新操作时，不需要传递所有字段
 */
export type PartialUser = Partial<User>;
// 等价于：
// {
//   id?: number;
//   name?: string;
//   email?: string;
//   ...
// }

/**
 * Required 示例：所有属性变为必需
 * 用途：确保某些场景下所有字段都必须提供
 */
export type RequiredUser = Required<User>;
// 现在 avatar 也是必需的

/**
 * Pick 示例：从类型中选取部分属性
 * 用途：创建只包含特定字段的类型
 */
export type UserBasicInfo = Pick<User, 'id' | 'name' | 'email'>;
// 等价于：
// {
//   id: number;
//   name: string;
//   email: string;
// }

/**
 * Omit 示例：从类型中排除部分属性
 * 用途：创建排除某些字段的类型
 */
export type UserWithoutTimestamp = Omit<User, 'createdAt' | 'updatedAt'>;
// 等价于：User 类型但没有 createdAt 和 updatedAt

/**
 * Record 示例：创建键值对类型
 * 用途：定义对象的键和值类型
 */
export type UserRolePermissions = Record<User['role'], string[]>;
// 等价于：
// {
//   admin: string[];
//   user: string[];
//   guest: string[];
// }

/**
 * Readonly 示例：所有属性变为只读
 * 用途：防止对象被修改
 */
export type ReadonlyUser = Readonly<User>;
// 所有属性都变成 readonly

/**
 * Extract 示例：从联合类型中提取特定类型
 * 用途：过滤联合类型
 */
export type AdminOrUser = Extract<User['role'], 'admin' | 'user'>;
// 结果：'admin' | 'user'

/**
 * Exclude 示例：从联合类型中排除特定类型
 * 用途：从联合类型中移除某些值
 */
export type NonGuestRole = Exclude<User['role'], 'guest'>;
// 结果：'admin' | 'user'

// ==================== 高级类型示例 ====================

/**
 * 组合使用工具类型
 * 创建用于表单的用户类型：
 * - 排除 id 和时间戳（服务器生成）
 * - 所有字段都是可选的（部分更新）
 */
export type UserFormData = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;

/**
 * 创建只读的基本信息
 */
export type ReadonlyUserBasicInfo = Readonly<Pick<User, 'id' | 'name' | 'email'>>;

/**
 * 嵌套的 API 响应类型
 */
export type UserListResponse = ApiResponse<User[]>;
export type ArticleDetailResponse = ApiResponse<Article>;

/**
 * 分页数据类型
 */
export interface PaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

/**
 * 分页响应类型
 */
export type PaginatedResponse<T> = ApiResponse<PaginatedData<T>>;
export type UserListPaginatedResponse = PaginatedResponse<User>;

// ==================== 实用类型别名 ====================

/**
 * ID 类型
 */
export type ID = number | string;

/**
 * 时间戳类型
 */
export type Timestamp = number;

/**
 * 可能为空的类型
 */
export type Nullable<T> = T | null;

/**
 * 可能为 undefined 的类型
 */
export type Optional<T> = T | undefined;

/**
 * 可能为空或 undefined 的类型
 */
export type Maybe<T> = T | null | undefined;

/**
 * 函数类型
 */
export type Callback<T = void> = (data: T) => void;
export type AsyncCallback<T = void> = (data: T) => Promise<void>;

/**
 * 状态类型
 */
export type Status = 'idle' | 'loading' | 'success' | 'error';

/**
 * 深度只读类型（递归）
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/**
 * 深度部分类型（递归）
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
