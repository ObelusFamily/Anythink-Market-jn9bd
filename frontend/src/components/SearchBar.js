import { connect } from "react-redux";
import agent from "../agent";
import React from "react";
import { SEARCH_INPUT_CHANGED } from "../constants/actionTypes";

const mapStateToProps = (state) => ({
  ...state.itemList,
  title: "",
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (pager, payload, title) =>
    dispatch({ type: SEARCH_INPUT_CHANGED, pager, payload, title }),
});

const SearchBar = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();

    if (ev.target.value.length > 2) {
      props.onChange(
        agent.Items.byTitle,
        agent.Items.byTitle(ev.target.value),
        ev.target.value
      );
    } else if (ev.target.value.length === 0) {
      props.onChange(agent.Items.all, agent.Items.all());
    }
  };

  return (
    <input
      placeholder="What is it that you truly desire?"
      id="search-box"
      onChange={handleChange}
      style={{ width: 275 + "px" }}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
