import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchUserStart } from "../redux/actions/usersActions";

const UsersRedux = (props) => {
  console.log(props)
  const [loader, setLoader] = useState(false);
  const [view, setView] = useState("LIST");
  const [details, setDetails] = useState({});
  const [data, setData] = useState(props.users.users);
 

  useEffect(() => {
    props.fetchUserStart();
  }, []);

  const onBack = () => {
    setView("LIST");
  };
  const deleteUser = id => {
    console.log("Delete user" + id);
  };
  const viewUser = item => {
    setView("VIEW");
  };
  const editUser = item => {
    setDetails(item);
    setName(item.first_name);
    setView("EDIT");
  };
  const addNewUser = () => {
    console.log("Add New user");
    setView("ADD");
  };
  const textOnChange = e => {
    setName(e.target.value);
  };

  const addNewUserFormSubmit = e => {
    console.log('Add New Form submitted')
  };

  const updateFormSubmit = e => {
    console.log("Update user form");
  };
  const refreshData = () =>{
    props.fetchUserStart();
  }
  const ListView = () => {
    return (
      <>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            addNewUser();
          }}
        >
          + Add New user
        </Button>
        &nbsp;
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            refreshData();
          }}
        >
          Refresh
        </Button>
        &nbsp;
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Profile Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                  <img src={item.avatar} height="35" width="35" />
                </td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => {
                      viewUser(item);
                    }}
                  >
                    View
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => {
                      editUser(item);
                    }}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => {
                      deleteUser(item.id);
                    }}
                  >
                    Delete
                  </button>
                  &nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };
  const addNewUserView = () => {
    return (
      <>
        <div>Add information from here</div>
        <form onSubmit={addNewUserFormSubmit}>
          <input type="text" name="name" placeholder="Enter Name" />
          <Button type="submit" variant="primary" size="sm">
            Save
          </Button>
          &nbsp;&nbsp;
          <Button variant="primary" size="sm" onClick={onBack}>
            Cancel
          </Button>
        </form>
      </>
    );
  };
  const editView = () => {
    return (
      <>
        <div>Update information from here</div>
        <form onSubmit={updateFormSubmit}>
          <div>----{details.id}------</div>
          <div>----{details.first_name}------</div>
          <div>----{details.last_name}------</div>
          <div>----{details.email}------</div>
          <div>
            <img src={details.avatar} />
          </div>
          <input
            type="text"
            onChange={textOnChange}
            value={name}
            name="name"
            placeholder="Enter Name"
          />
          <br />
          <br />
          <div>
            <Button type="submit" variant="primary" size="sm">
              Update
            </Button>
            &nbsp;
            <Button variant="primary" size="sm" onClick={onBack}>
              Cancel
            </Button>
          </div>
        </form>
      </>
    );
  };
  const detailView = () => {
    return (
      <>
        <div>Details Here</div>
        <div>----{details.id}------</div>
        <div>----{details.first_name}------</div>
        <div>----{details.last_name}------</div>
        <div>----{details.email}------</div>
        <div>
          <img src={details.avatar} />
        </div>

        <Button variant="primary" size="sm" onClick={onBack}>
          Cancel
        </Button>
      </>
    );
  };
  const pageView = () => {
    if (view === "ADD") {
      return addNewUserView();
    } else if (view === "VIEW") {
      return detailView();
    } else if (view === "EDIT") {
      return editView();
    }
    return ListView();
  };
  return (
    <>
      {loader && (
        <div className="app-loader">
          <br />
          <br />
          Loading.......
        </div>
      )}

      <h4>Users Redux Management</h4>
      {pageView()}
    </>
  );
};
// export default UsersRedux;
const mapStateToProps = state => ({
  users: state.userData
});

export default connect(
  mapStateToProps,
  { fetchUserStart }
)(UsersRedux);
