export interface IAccountButton { type: 'verified' | 'new' | 'rejected' }
export interface IAccount {
    id: number,
    name: string,
    date: string,
    verification: "verified" | "new" | "rejected",
    type: string,
}
