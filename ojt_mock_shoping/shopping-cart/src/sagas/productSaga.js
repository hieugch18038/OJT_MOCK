// productSaga.js
import { put, takeLatest, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as productActions from '../actions/productActions';
import api from '../services/api';

function* fetchProducts() {
    try {
        const response = yield call(api.fetchProducts);
        yield put(productActions.fetchProductsSuccess(response.data));
    } catch (error) {
        // Handle error
    }
}

function* watchFetchProducts() {
    yield takeLatest(actionTypes.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default function* productSaga() {
    yield watchFetchProducts();
    // Add more sagas as needed
}
