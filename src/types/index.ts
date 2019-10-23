export interface UserInfo {
    id?: string
    password: string
    email: string
    fullname: string
    deviceId?: string
    gender?: string
}

export enum CompletedEnum {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    IN_PROGRESS = 'IN_PROGRESS'
}

export interface TodoInput {
    title: string
    completed: CompletedEnum
    collaborater_ids: Array<number>
}

export interface TodoItem {
    id: string
    title: string
    completed: CompletedEnum
    owner_id: string
    collaborater_ids: Array<string>
}
