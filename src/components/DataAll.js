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
            return (!usr.firstName
              .toLowerCase()
              .search(this.props.search.toLowerCase())|| !usr.lastName.toLowerCase().search(this.props.search.toLowerCase())) ;
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
            return (
              !usr.firstName
                .toLowerCase()
                .search(this.props.search.toLowerCase()) ||
              !usr.lastName
                .toLowerCase()
                .search(this.props.search.toLowerCase())
            );
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
            return (
              !usr.firstName
                .toLowerCase()
                .search(this.props.search.toLowerCase()) ||
              !usr.lastName
                .toLowerCase()
                .search(this.props.search.toLowerCase())
            );
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
    let end = start + parseInt(noOfData);
    if(end>len){
      end=len;
    }
    return (
      <div>
        <div>
          <div className="table">
            <div className="thead">
              <div className="trow">
                <div className="thcol">Name</div>
                <div className="thcol">Location</div>
                <div className="thcol">Date</div>
                <div className="thcol">Salary</div>
              </div>
            </div>
            <div className="tbody">
              {/* .filter((usr)=>{return usr.firstName===this.props.search;}) */}
              {this.state.users.slice(start, end).map((user) => (
                <div className="trow" key={user.id}>
                  <div className="tcol">
                    {user.firstName} {user.lastName}
                  </div>
                  <div className="tcol">{user.location}</div>
                  <div className="tcol">
                    {(new Date(parseInt(user.date))).toGMTString()}
                  </div>
                  <div className="tcol">{user.salary}</div>
                </div>
              ))}
            </div>
            <div className="tfoot">
              <div className="trow">
                <div className="thcol">Name</div>
                <div className="thcol">Location</div>
                <div className="thcol">Date</div>
                <div className="thcol">Salary</div>
              </div>
            </div>
          </div>
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
// function prettyDate(a){
//   var date=new Date(parseInt(a));
//   console.info(typeof(a));
//   var months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   // return date.getUTCDate() + "/" + months[date.getUTCMonth()] + "/" + date.getUTCFullYear()+" | "+date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds();
//   return date;
// }