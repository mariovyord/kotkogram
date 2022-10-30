export interface IUser {
    _id: string,
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    description: string,
    imageUrl: string,
    followers: string[]
    role: 'user' | 'moderator' | 'admin',
}
