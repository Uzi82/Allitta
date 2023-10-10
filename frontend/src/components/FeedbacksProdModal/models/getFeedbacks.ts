import { feedBacks } from "../";

export async function getFeedbacks(id: string): Promise<feedBacks> {
    return {
        overall: 3,
        list: [
            {
                id: '1',
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                id: '2',
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                id: '3',
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                id: '4',
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                id: '5',
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                id: '6',
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                id: '7',
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                id: '8',
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            }
        ]
    }
}