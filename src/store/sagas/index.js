import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/index";
import * as fromAuthEffects from "./authentication.effect";
import * as fromBurgerBuilderEffects from "./burgerBuilder.effect";
import * as fromContactDataEffects from "./contactData.effect";
import * as fromOrdersEffects from "./orders.effect";

export function* watchAuthLogout() {
  yield takeEvery(actionTypes.AUTH_TIMEOUT, fromAuthEffects.authTimeoutEffect);
  yield takeEvery(actionTypes.AUTH_LOGOUT, fromAuthEffects.authLogoutEffect);
  yield takeEvery(actionTypes.AUTH_LOGIN_INIT, fromAuthEffects.authLoginEffect);
  yield takeEvery(
    actionTypes.AUTH_CHECK_SESSION,
    fromAuthEffects.authCheckSessionEffect
  );
  yield takeEvery(
    actionTypes.LOAD_INGREDIENTS_INIT,
    fromBurgerBuilderEffects.loadIngredientEffect
  );
  yield takeEvery(
    actionTypes.CREATE_NEW_ORDER_INIT,
    fromContactDataEffects.createNewOrderEffect
  );
  yield takeEvery(
    actionTypes.LOAD_ORDERS_INIT,
    fromOrdersEffects.loadOrdersEffect
  );
}
