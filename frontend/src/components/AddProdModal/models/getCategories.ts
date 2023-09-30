import { type category, type subcategory } from "../"


export const getCategories = async (): Promise<{ categories: category[], subcategories: subcategory[]}> => {
    return {
        categories: [
            {
                id: '1',
                name: 'Test 1'
            },
            {
                id: '2',
                name: 'Test 2'
            },
            {
                id: '3',
                name: 'Test 3'
            }
        ],
        subcategories: [
            {
                id: '1',
                name: 'Test 1'
            },
            {
                id: '2',
                name: 'Test 2'
            },
            {
                id: '3',
                name: 'Test 3'
            }
        ]
    }
}