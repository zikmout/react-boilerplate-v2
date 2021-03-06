import authReducer from "../../reducers/auth";
import { auth } from "firebase";

test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "abc123",
  };
  const state = authReducer(state, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid for logout", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer({ uid: "anything" }, action);
  expect(state).toEqual({});
});
