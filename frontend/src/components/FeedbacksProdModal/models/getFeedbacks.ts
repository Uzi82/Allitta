import { feedBacks } from "../";

export async function getFeedbacks(id: string): Promise<feedBacks> {
    return {
        overall: 3,
        list: [
            {
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            },
            {
                name: 'Customer name',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                stars: 3
            }
        ]
    }
}