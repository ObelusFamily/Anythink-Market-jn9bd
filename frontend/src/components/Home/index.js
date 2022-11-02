import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  ITEM_SEARCHED,
  SEARCH_INPUT_CHANGED,
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
  // Add an onSearch dispatch.
  onSearch: (payload) => dispatch({ type: ITEM_SEARCHED, payload }),
  onSearchInputChange: (payload) =>
    dispatch({ type: SEARCH_INPUT_CHANGED, payload }),
});

class Home extends React.Component {
  componentWillMount() {
    const tab = "all";
    const itemsPromise = agent.Items.all;

    this.props.onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise()])
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  // Add event handler for onSearch.  Should fetch the items with the filter query string, and then call the dispatcher to update the store.
  handleItemSearch = async (event) => {
    const title = event.target.value;
    // Find all when the input is cleared.
    if (title.length < 3 && title.length > 0) return;
    this.props.onSearchInputChange(title);

    const filteredItems = await agent.Items.byTitle(title);
    this.props.onSearch(filteredItems);
  };

  render() {
    return (
      <div className="home-page">
        <Banner onItemSearch={this.handleItemSearch} />

        <div className="container page">
          <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
          <MainView />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
