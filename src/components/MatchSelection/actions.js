const actions = {
  PROCEED_NEXT: 'PROCEED_NEXT'
}

function matchSelectedAction (match) {
  return {
    type: actions.PROCEED_NEXT,
    selectedMatch: match
  }
}

export { actions as matchActions, matchSelectedAction };