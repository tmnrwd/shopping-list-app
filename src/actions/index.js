export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
}


//this is what's giving the error
//console.log("local state is:", localState)
 
let nextTodoId = 1
if (localStorage.getItem('state')){
const localState = localStorage.getItem('state');

while (localState.includes(`:${nextTodoId}`)){
  //console.log("loop triggered")
  nextTodoId++
}
}
//console.log(nextTodoId)

export function addTodo(text, store, nextToDoId) {
  return {
    type: ADD_TODO,                                           //then add to the list
    id: nextTodoId++,
    text
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}