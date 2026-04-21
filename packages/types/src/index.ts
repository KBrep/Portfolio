/** Generic API response wrapper */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/** Paginated API response */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/** API error response */
export interface ApiError {
  message: string;
  code?: string;
  statusCode: number;
  details?: Record<string, string[]>;
}

/** Common ID type */
export type ID = string | number;

/** Sort order */
export type SortOrder = "asc" | "desc";

/** Common filter parameters */
export interface FilterParams {
  search?: string;
  sortBy?: string;
  sortOrder?: SortOrder;
  page?: number;
  pageSize?: number;
}
