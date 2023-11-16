import React from 'react'
import { Flex, Pagination } from 'antd'
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostCard from '../PostCard'
import * as fetchDataActions from '../../actions/fetchDataActions'

import styles from './PostList.module.scss'

function PostList({ fetchDataOnPage }) {
  // const dispatch = useDispatch()  useDispatch,  connect,
  const data = useSelector((state) => state.pageData)
  const page = useSelector((state) => state.pageNumber)
  const articlesCount = useSelector((state) => state.totalArticles)

  const postCards = data.map((item) => {
    const itemKey = `${item.author.username}${item.createdAt}${item.title}`

    return <PostCard key={itemKey} item={item} />
  })

  return (
    <Flex vertical className={styles.postList}>
      {postCards}
      <Pagination
        style={{ alignSelf: 'center', margin: '0 auto', marginTop: '15px', paddingBottom: '25px' }}
        total={articlesCount}
        current={page}
        showSizeChanger={false}
        pageSize={20}
        onChange={(pageNum) => {
          fetchDataOnPage(pageNum)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />
    </Flex>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(fetchDataActions, dispatch)
}

export default connect(null, mapDispatchToProps)(PostList)
