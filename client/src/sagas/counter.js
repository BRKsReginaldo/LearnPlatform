import {INCREMENT, INCREMENT_ASYNC} from "../actions/count";
import {incrementAsync} from "./index";
import {put, takeEvery} from "redux-saga/effects";
import {delay} from "redux-saga";

export function* incrementAsyncEffect() {
  yield delay(1000)
  yield put({type: INCREMENT})
}

export default function* () {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncEffect)
}