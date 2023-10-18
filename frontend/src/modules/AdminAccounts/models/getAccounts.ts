import { ICategory } from "./types";

export async function getAccounts(): Promise<ICategory[]> {
    return [
        {
            id: '1',
            title: 'Test 1'
        },
        {
            id: '2',
            title: 'Test 2'
        },
        {
            id: '3',
            title: 'Test 3'
        }
    ]
}