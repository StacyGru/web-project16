export interface MyWorker
{
    id?: number;
    name: string;
    last_name: string;
    surname: string;
    date_of_birth: string;
    phone: string;
    email: string;
    type: number; 
}

export enum MyWorkerType
{
    IT,
    sales,
    delivery,
    lawyers
}