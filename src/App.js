import React from 'react';
import { CSVLink } from "react-csv";
import './App.css';

class App extends React.Component {
  state = {
    data: [
      { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
      { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
      { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
    ],
    headers: [
      { test: "First Name", key: "firstname" },
      { test: "Last Name", key: "lastname" },
      { test: "Email", key: "email" }
    ]
  }
  render() {
    return (
      < div >
        <CSVLink data={this.state.data} headers={this.state.headers}>
          Download me Test
</CSVLink>;
</div >
    )
  }
}

export default App;
