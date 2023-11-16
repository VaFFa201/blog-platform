import { API_URL_BASE } from '../utils/consts'

export const fetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST',
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  }
}

export const fetchArticleDataSuccess = (data) => {
  return {
    type: 'FETCH_ARTICLE_DATA_SUCCESS',
    payload: data,
  }
}

export const fetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  }
}

export const handlePageChange = (pageNum) => {
  return {
    type: 'HANDLE_PAGE_CHANGE',
    payload: pageNum,
  }
}

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest())
    try {
      const response = await fetch(`${API_URL_BASE}/articles`)
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
      }
      const body = await response.json()

      dispatch(fetchDataSuccess(body))

      return body
    } catch (error) {
      dispatch(fetchDataFailure(error))
    }
  }
}

export const fetchDataOnPage = (pageNum) => {
  return async (dispatch) => {
    dispatch(handlePageChange(pageNum))
    dispatch(fetchDataRequest())
    try {
      const response = await fetch(`${API_URL_BASE}/articles?offset=${(pageNum - 1) * 20}`)
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
      }
      const body = await response.json()

      dispatch(fetchDataSuccess(body))

      return body
    } catch (error) {
      dispatch(fetchDataFailure(error))
    }
  }
}

export const fetchArticleData = (slug) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest())
    try {
      const response = await fetch(`${API_URL_BASE}/articles/${slug}`)
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
      }
      const body = await response.json()

      dispatch(fetchArticleDataSuccess(body))

      return body
    } catch (error) {
      dispatch(fetchDataFailure(error))
    }
  }
}
