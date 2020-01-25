import React, { Component } from "react";
import ResultItem from "./ResultItem";
export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </div>
    );
  }
}
