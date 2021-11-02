export const selectUserName = (reduxState) => reduxState.user.name;
export const selectUserEmail = (reduxState) => reduxState.user.email;

export const selectUser = (reduxState) => reduxState.user;

export const selectUserProfile = (reduxState) => {
  return {
    name: reduxState.user.name,
    email: reduxState.user.email,
  };
};
