import React, { Component } from "react";
import DataAll from "./DataAll";

export default class DataList extends Component {
  constructor(props) {
    super(props);
    this.state = { noOfData: "", value: "", search: "" };
  }

  onChangeHandle = (event) => {
    this.setState({ noOfData: event.target.value });
  };
  onChangeHandleApi = (event) => {
    this.setState({ value: event.target.value });
  };
  onChangeHandleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    let noOfData = this.state.noOfData === "" ? 10 : this.state.noOfData;
    let value = this.state.value === "" ? "medium" : this.state.value;

    return (
      <div>
        <div className="flex">
          <div>
            Show{" "}
            <input
              type="number"
              value={noOfData}
              onChange={this.onChangeHandle}
            />
            Entries
          </div>
          <div>
            <label>
              <b>Pick Api type:</b>
              <select value={value} onChange={this.onChangeHandleApi}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
          </div>
          <div>
            {/* {this.state.search} */}
            <input
              type="text"
              placeholder="Search Name.."
              onChange={this.onChangeHandleSearch}
            />
          </div>
        </div>
        <DataAll
          noOfData={noOfData}
          apitype={value}
          search={this.state.search}
        />
      </div>
    );
  }
}
