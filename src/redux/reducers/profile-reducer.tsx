import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'


type PostType = {
    id: number,
    message: string,
    likesCount: number
}

type InitialStateType = {
    posts: Array<PostType>
    profile: any
    profileStatus: string
}

let initialState: InitialStateType = {
    posts: [{id: 1, message:'hello world!', likesCount:0}],
    profile: null,
    profileStatus: '',
}

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_PROFILE_STATUS:
            return {...state, profileStatus: action.profileStatus}
        default:
            return state;
    }
}

type addPostActionType = {
    type: typeof ADD_POST,
    newPostBody: string
}
export const addPostActionCreator = (newPostBody: string) : addPostActionType => ({type: ADD_POST, newPostBody})

type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: any
}
export const setUserProfile = (profile: any): setUserProfileType => ({type: SET_USER_PROFILE, profile})

type setProfileStatusType = {
    type: typeof SET_PROFILE_STATUS,
    profileStatus: string
}
export const setProfileStatus = (profileStatus: string): setProfileStatusType => ({type: SET_PROFILE_STATUS, profileStatus})

export const requestProfile = (userId: number) => (dispatch: any) => {
    profileAPI.getProfile(userId).then((data: any) => {
        dispatch(setUserProfile(data));
    });
}

export const requestProfileStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getProfileStatus(userId).then((response: any) => {
       dispatch(setProfileStatus(response.data));
    });
}

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status).then((response: any) => {
        if (response.data.resultCode === 0){
            dispatch(setProfileStatus(status))
        }
    })
}


export default profileReducer;