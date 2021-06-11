import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  productFailedAction,
  productSucceedAction,
} from "../Action/productAction";
import { SANPHAM_REQUESTED } from "../Constants/contant";

async function apiProduct() {
  const { data } = await axios({
    method: "GET",
    url: "http://127.0.0.1:8000/api/product",
  });
  return data;
}
function* dsProduct() {
  try {
    const res = yield call(apiProduct);
    console.log(res);
    if (res.success) {
      yield put(productSucceedAction(res.data));
    }
  } catch (err) {
    yield put(productFailedAction(err.message));
  }
}
export function* dsProductWatcher() {
  yield takeLatest(SANPHAM_REQUESTED, dsProduct);
}
