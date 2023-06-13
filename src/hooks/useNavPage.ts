import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { isNoNeedUserInfo, MANAGE_INDEX_PATHNAME, LOGIN_PATHNAME } from '../router/index'

function useNavPage(waitingUserData: boolean) {
  const { pathname } = useLocation()
  const nav = useNavigate()
  const username = 'lc'

  useEffect(() => {
    if (waitingUserData) return

    // 未登录
    if (isNoNeedUserInfo(pathname)) {
      return
    } else {
      nav(LOGIN_PATHNAME)
    }
  }, [waitingUserData, username, pathname])
}

export default useNavPage
