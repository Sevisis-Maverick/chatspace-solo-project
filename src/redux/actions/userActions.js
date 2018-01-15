export const USER_ACTIONS = {
  FETCH_USER: 'FETCH_USER',
  SET_USER: 'SET_USER_ACTION',
  UNSET_USER: 'UNSET_USER_ACTION',
  REQUEST_START: 'REQUEST_START_USER_ACTION',
  REQUEST_DONE: 'REQUEST_DONE_USER_ACTION',
};

export function fetchUser() {
  return { type: USER_ACTIONS.FETCH_USER };
}

export const logoutUser = () => ({
  type: USER_ACTIONS.UNSET_USER,
});
