import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import {
  AppSagaRequest,
  AppSagaSucccess,
  AppSagaFailure,
} from "../slice/appslice";

const callApi = async ({ url, method, data, headers }) => {
  return await Axios({
    url,
    method,
    data,
    headers,
  });
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* AppSagaRequestSaga(action) {
  try {
    const response = yield call(() =>
      callApi({
        url: "https://www.nobroker.in/nb-creditline/api/v1/credit/profile?phone=+917076527533",
      })
    );

    yield put(AppSagaSucccess(response.data));
  } catch (e) {
    yield AppSagaFailure();
  }
}

function* saga() {
  yield takeLatest(AppSagaRequest, AppSagaRequestSaga);
}

export default saga;
