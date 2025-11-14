export interface IApiResponse<T> {
    data: T;
    meta?: IPaginationMetaData;
    timestamp: Date;
    status: number;
    message?: string;
}

export interface IPaginationMetaData {
    totalItems: number;
    totalPages: number;
    currentPage: number;
}

export interface IErrorResponse {
    error: Array<string>;
    message: string;
    status: number;
}