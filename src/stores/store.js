import { configureStore } from '@reduxjs/toolkit'

import reducer from '../redusers/reducer'

const store = configureStore({ reducer })

export default store
