export interface IGenericServerResponse {
    code: number,
    message: string,
    data: any | undefined,
    errors: string[] | undefined,
}
