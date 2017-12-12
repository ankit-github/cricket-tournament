const actions = {
  COMPLETE_TOSS: 'COMPLETE_TOSS'
};

function completeTossAction (result) {
  return {
    type: actions.COMPLETE_TOSS,
    result
  };
}

export { actions as TossActions, completeTossAction }