import type { statusesTS } from "../"

export const statuses: statusesTS = {
    New: '#006CCF',
    On_Process: '#FF9C00',
    On_Delivery: '#882FFA',
    Done: '#28D764',
    Lose: '#DD3A3A'
}

export const filtersOptions = [
    {
        value: 'All',
        label: 'All'
    },
    {
        value: 'New',
        label: 'New'
    },
    {
        value: 'On Process',
        label: 'On Process'
    },
    {
        value: 'On Delivery',
        label: 'On Delivery'
    },
    {
        value: 'Done',
        label: 'Done'
    },
    {
        value: 'Lose',
        label: 'Lose'
    }
]