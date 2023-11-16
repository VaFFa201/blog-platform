/* eslint-disable default-param-last */
/* eslint-disable indent */

const dafaultState = {
  pageData: [],
  pageNumber: 1,
  totalArticles: 0,
  error: '',
  currentArticle: {},
  isLogin: false,
  isLoading: false,
}

const reducer = (state = dafaultState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      }

    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        pageData: [...action.payload.articles],
        totalArticles: action.payload.articlesCount,
      }

    case 'HANDLE_PAGE_CHANGE':
      return {
        ...state,
        pageNumber: action.payload,
      }

    case 'FETCH_ARTICLE_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        currentArticle: action.payload.article,
      }

    default:
      return state
  }
}

export default reducer
