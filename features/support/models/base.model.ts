export class BaseModel {

    baseUrl: string = "https://api.thecatapi.com/v1";
}

export interface LastResponseInterface {
    status_code: number;
    body: any;
};
