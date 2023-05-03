// reducer store

export interface IStore {
    "auth/api": AuthApi
    userData: UserData
}

export interface AuthApi {
    queries: Queries
    mutations: Mutations
    provided: Provided
    subscriptions: Subscriptions
    config: Config
}

export interface Queries { }

export interface Mutations { }

export interface Provided { }

export interface Subscriptions { }

export interface Config {
    online: boolean
    focused: boolean
    middlewareRegistered: boolean
    refetchOnFocus: boolean
    refetchOnReconnect: boolean
    refetchOnMountOrArgChange: boolean
    keepUnusedDataFor: number
    reducerPath: string
}

export interface UserData {
    lookingFor: string
    age: string
    location: string
    username: string
    password: string
}

// response user data 

export interface ResponseUserData {
    Data: UserAccessToken
}

export interface UserAccessToken {
    access_token: string
    user: User
}

export interface User {
    _id: string
    username: string
    dtStartRegistration: string
    DOB: string
    email: string
    location: string
    dtFinishedRegistration: string
    email_verified: boolean
    gender: string
    looking_for: string
    phone_verified: any
    state: number
    type: string
    verification_token: string
    access_token: string
    dtTypeUpdate: string
    music: string[]
    movies: string[]
    travel: Travel[]
    description: string
    description_approved: boolean
    phone: string
    pictures: Picture[]
    avatar: any
    psw_reset_token: string
    hobbies: string[]
    traits: string[]
    sexinterests: string[]
    device: any
    dtSmsSent: string
    ip: any
    smsCodeKey: string
    sms_sent_cnt: number
    religion: string
    education: string
    email_reset_token: string
    description_dt: string
    body_type: string
    ef_transaction_id: string
    description_old: string
}

export interface Travel {
    country: string
    place: string
}

export interface Picture {
    id: string
    avatar: boolean
    visible: boolean
    blurred: boolean
    ext: string
    approved: boolean
    dt?: string
}
