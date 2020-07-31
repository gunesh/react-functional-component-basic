
const actionInterceptor = store => next => action => {
    let currentState = store.getState()
    let allowNextAction = true;
    //console.log(currentState)
   // console.log(action)
    if(allowNextAction) {
      next(action)
    }
  }
  
  
  
  export default actionInterceptor