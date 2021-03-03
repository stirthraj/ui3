import axios from 'axios';
import React, { Component } from 'react'

export default class DataAll extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidUpdate() {
    if (this.props.apitype === "small") {
      axios
        .get(
          "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json"
        )
        .then((res) => {
          // console.log(res.data.length);

          const users = res.data;
          const len = users.length;
          this.setState({ users, len });
        });
    } else if (this.props.apitype === "medium") {
      axios
        .get(
          "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json"
        )
        .then((res) => {
          // console.log(res.data.length);

          const users = res.data;
          const len = users.length;
          this.setState({ users, len });
        });
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json"
        )
        .then((res) => {
          // console.log(res.data.length);

          const users = res.data;
          const len = users.length;
          this.setState({ users, len });
        });
    }
  }

  render() {
    const noOfData = this.props.noOfData;
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
              {this.state.users.slice(0, noOfData).map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName + user.lastName}</td>
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
          <div>
            <h6>
              Showing 1 to {noOfData} of {this.state.len} entries
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
