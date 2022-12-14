export interface IUser {
    _id: string,
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    description: string,
    imageUrl: string,
    following: string[]
    role: 'user' | 'moderator' | 'admin',
}
