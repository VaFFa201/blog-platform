/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Flex, Space, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as fetchDataActions from '../../actions/fetchDataActions'

import styles from './PostView.module.scss'

const { Text } = Typography

function PostView({ currentArticle, fetchArticleData }) {
  const params = useParams()

  useEffect(() => {
    fetchArticleData(params.sign)
  }, [])

  const { slug, description, title, createdAt, author, favoritesCount, tagList } = currentArticle
  const { username, image } = author

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

  const tags = tagList.map((tag, index) => {
    const tadKey = `${slug}-${tag}${index}`
    return (
      <Text key={tadKey} keyboard>
        {tag}
      </Text>
    )
  })

  console.log(currentArticle)

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

      {/* <div className={styles.post__subtitle}>Est Ampyciden pater patent</div>
      <div className={`${styles.post__chapter} ${styles.chapter}`}>
        <div className={styles.chapter__header}>Amor saxa inpiger</div>
        <div className={styles.chapter__content}>
          <p className={styles.chapter__paragraph}>
            Lorem markdownum Stygias neque is referam fudi, breve per. Et Achaica tamen: nescia ista occupat, illum se
            ad potest humum et.
          </p>
        </div>
      </div>
      <div className={`${styles.post__chapter} ${styles.chapter}`}>
        <div className={styles.chapter__header}>Qua deos has fontibus</div>
        <div className={styles.chapter__content}>
          <p className={styles.chapter__paragraph}>
            Recens nec ferro responsaque dedere armenti opes momorderat pisce, vitataque et fugisse. Et iamque
            incipiens, qua huius suo omnes ne pendentia citus pedum.
          </p>
        </div>
      </div>
      <div className={`${styles.post__chapter} ${styles.chapter}`}>
        <div className={styles.chapter__header}>Quamvis pronuba</div>
        <div className={styles.chapter__content}>
          <p className={styles.chapter__paragraph}>
            Ulli labore facta. Io cervis non nosterque nullae, vides: aethere Delphice subit, tamen Romane ob cubilia
            Rhodopen calentes librata! Nihil populorum flava, inrita? Sit hic nunc, hoc formae Esse illo? Umeris eram
            similis, crudelem de est relicto ingemuit finiat Pelia uno cernunt Venus draconem, hic, Methymnaeae.
          </p>
          <p className={styles.chapter__paragraph}>
            1. Clamoribus haesit tenentem iube Haec munera
            <br /> 2. Vincla venae
            <br /> 3. Paris includere etiam tamen
            <br /> 4. Superi te putria imagine Deianira
            <br /> 5. Tremore hoste Esse sed perstat capillis siqua
          </p>
        </div>
      </div> */}
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
