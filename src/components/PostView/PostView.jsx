/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Flex, Space, Spin, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Markdown from 'react-markdown'

import * as fetchDataActions from '../../actions/fetchDataActions'

import styles from './PostView.module.scss'

const { Text } = Typography

function PostView({ currentArticle, fetchArticleData, clearCurrentArticle }) {
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    fetchArticleData(params.sign)

    // return dispatch(clearCurrentArticle())
  }, [])

  function formatDate(dateString) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const dateParts = dateString.split('-')
    const month = months[parseInt(dateParts[1], 10) - 1]
    const day = parseInt(dateParts[2], 10)
    const year = parseInt(dateParts[0], 10)

    return `${month} ${day}, ${year}`
  }

  if (!currentArticle)
    return (
      <Flex style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Spin />
      </Flex>
    )

  const { slug, description, title, createdAt, author, favoritesCount, tagList, body } = currentArticle
  const { username, image } = author
  const tags = tagList.map((tag, index) => {
    const tadKey = `${slug}-${tag}${index}`
    return (
      <Text key={tadKey} keyboard>
        {tag}
      </Text>
    )
  })

  return (
    <Flex className={`${styles.post} ${styles['post-view']}`} vertical>
      <Flex className={styles.post__header} justify="space-between" align="center">
        <div className={styles.post__general}>
          <Space>
            <div className={styles.post__title}>{title}</div>
            <div className={styles.post__likes}>{`${favoritesCount} likes`}</div>
          </Space>
          <div className={styles.post__tags}>{tags}</div>
        </div>
        <Flex className={styles.post__author}>
          <Flex vertical>
            <div className={styles.author__name}>{username}</div>
            <div className={styles.post__date}>{formatDate(createdAt)}</div>
          </Flex>
          <img src={image} className={styles.author__pic} alt="profile icon" />
        </Flex>
      </Flex>
      <div className={styles.post__description}>{description}</div>
      <Markdown>{body}</Markdown>
    </Flex>
  )
}

const mapStateToProps = (state) => ({
  currentArticle: state.currentArticle,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(fetchDataActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView)
