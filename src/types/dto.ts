export type Response = {
    status_code: number
    status: string,
}

export type Success<T> = {
    data: T
} & Response;

export type Fail = {
    message: Map<string, string>,
} & Response

