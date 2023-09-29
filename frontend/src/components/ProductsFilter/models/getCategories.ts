import { type category } from "../";
export async function getCategories(): Promise<category[]> {
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