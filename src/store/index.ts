import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './userReducer'
import pageInfoReducer, { PageInfoType } from './pageInfoReducer'

export type StateType = {
  user: UserStateType
  pageInfo: PageInfoType
}

export default configureStore({
  reducer: {
    user: userReducer,

    pageInfo: pageInfoReducer,
  },
})
