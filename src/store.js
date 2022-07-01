import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSwitch/themeSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchRepos } from "./Main/Repositories/reposSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
        
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchRepos);

export default store;