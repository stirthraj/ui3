import axios from "axios";
import React, { Component } from "react";

export default class DataAll extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], page: 0 };
  }
  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json"
      )
      .then((res) => {
        // console.log(res.data.length);

        let users = res.data.filter((usr) => {
          return !usr.firstName.search(this.props.search);
        });
        let len = users.length;
        if (len < 1) {
          users = res.data;
          len = users.length;
        }
        this.setState({ users, len });
      });
  }
  componentDidUpdate() {
    if (this.props.apitype === "small") {
      axios
        .get(
          "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json"
        )
        .then((res) => {
          // console.log(res.data.length);

          let users = res.data.filter((usr) => {
            return !usr.firstName.search(this.props.search);
          });
          let len = users.length;
          if (len < 1) {
            users = res.data;
            len = users.length;
          }
          this.setState({ users, len });
        });
    } else if (this.props.apitype === "medium") {
      axios
        .get(
          "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json"
        )
        .then((res) => {
          // console.log(res.data.length);

          let users = res.data.filter((usr) => {
            return !usr.firstName.search(this.props.search);
          });
          let len = users.length;
          if (len < 1) {
            users = res.data;
            len = users.length;
          }
          this.setState({ users, len });
        });
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json"
        )
        .then((res) => {
          // console.log(res.data.length);
          let users = res.data.filter((usr) => {
            return !usr.firstName.search(this.props.search);
          });
          let len = users.length;
          if (len < 1) {
            users = res.data;
            len = users.length;
          }
          this.setState({ users, len });
        });
    }
  }

  onChangePrev = () => {
    this.setState({ page: this.state.page - 1 });
  };
  onChangeNext = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const noOfData = this.props.noOfData;
    const len = this.state.len;
    const start = Math.abs(this.state.page * noOfData);
    if (start >= len) {
      this.setState({ page: 0 });
    }
    const end = start + parseInt(noOfData);
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {/* .filter((usr)=>{return usr.firstName===this.props.search;}) */}
              {this.state.users.slice(start, end).map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.location}</td>
                  <td>{user.date}</td>
                  <td>{user.salary}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Date</th>
                <th>Salary</th>
              </tr>
            </tfoot>
          </table>
          <div className="flex">
            <div>
              Showing {start} to {end} of {len} entries
            </div>
            <div>
              <button onClick={this.onChangePrev}>Prev</button>
              <button onClick={this.onChangeNext}>Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
