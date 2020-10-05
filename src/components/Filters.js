import React from "react"
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/index'
import Nav from 'react-bootstrap/Nav';

class Filters extends React.Component {
  render() {
    return (
      <Nav variant="tabs" defaultActiveKey="All">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All Shopping List Items</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>To Buy</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Bought</FilterLink>
      </Nav>
    )
  }
}
export default Filters
