import React, { FC, useEffect, useState } from 'react'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { HOME_PATHNAME, MANAGE_INDEX_PATHNAME } from '../router/index'
import styles from './Logo.module.scss'

const { Title } = Typography

const Logo: FC = () => {
  const { username } = { username: 'lc' }

  const [pathname, setPathname] = useState(HOME_PATHNAME)
  useEffect(() => {
    if (username) {
      setPathname(MANAGE_INDEX_PATHNAME)
    }
  }, [username])

  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>ZA问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
