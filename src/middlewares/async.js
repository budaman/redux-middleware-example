export default function({ dispatch }) {
  return next => action => {
    //if action does not have payload or promise we dont care send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    //make sure the actions promise resolves
    action.payload.then(function(response) {
      //new data into action
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };
}
