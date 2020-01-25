import React, { Component } from "react";
import ResultItem from "./ResultItem";
import IconButton from "@material-ui/core/IconButton";
import {PlayVideo} from "./index";
import SvgIcon from "@material-ui/core/SvgIcon";
function FilterIcon(props) {
  return (
      <SvgIcon {...props}>
        <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
      </SvgIcon>
  );
}

export default class SearchResult extends Component {

  state = {
    selectedVideo: null
  }

  videoSelected = selectedIndex => {
    const selected = this.props.items.find((item, index) => index === selectedIndex)
    this.setState(prevState => {
      return {
        ...prevState, selectedVideo: selected
      }
    })
  }

  render() {
    const {items} = this.props;
    return (
      <div>
        {this.state.selectedVideo ? <PlayVideo video={this.state.selectedVideo} items={items} /> :
            <div className="search-area">
              {items.length === 0 ? '' :
                  <div className="filter">
                    <IconButton style={{ marginLeft: "20px", paddingBottom: "0px" }}>
                      <FilterIcon
                          style={{
                            color: "gray",
                            fontSize: "24px",
                            height: "28px",
                            width: "25px",
                            opacity: "0.5",
                            paddingLeft: "2px"
                          }}
                      />
                      <span className="filter">FILTER</span>
                    </IconButton>
                    <hr style={{ width: "95%" }} />
                  </div>
              }
              {items.length === 0 ? '' :
                  items.map((item, index) => <ResultItem videoSelected={() => this.videoSelected(index)} index={index} key={index} video={item} />)
              }
            </div>
        }
      </div>
    );
  }
}
