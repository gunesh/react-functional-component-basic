import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchUserStart } from "../redux/actions/usersActions";

const UsersRedux = props => {
  console.log(props);
  const [loader, setLoader] = useState(false);
  const [view, setView] = useState("LIST");
  const [details, setDetails] = useState({});

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
    setDetails(item);
    setView("VIEW");
  };
  const editUser = item => {
    setDetails(item);
    setView("EDIT");
  };
  const addNewUser = () => {
    console.log("Add New user");
    setView("ADD");
  };
  const changeDetail = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

  const addNewUserFormSubmit = e => {
    e.preventDefault();
    console.log("Add New Form submitted");
    setView("LIST");
  };

  const updateFormSubmit = e => {
    e.preventDefault();
    console.log("Update user form");
    setView("LIST");
  };

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
            {props.users.users.map(item => (
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
         
          <div>
            <input
              type="text"
              onChange={changeDetail}
              value={details.first_name}
              name="first_name"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={changeDetail}
              value={details.last_name}
              name="last_name"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={changeDetail}
              value={details.email}
              name="email"
              placeholder="Enter Email"
            />
          </div>
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
          <div>
            <input
              type="text"
              onChange={changeDetail}
              value={details.first_name}
              name="first_name"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={changeDetail}
              value={details.last_name}
              name="last_name"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={changeDetail}
              value={details.email}
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <img src={details.avatar} />
          </div>
          <input
            type="text"
            onChange={changeDetail}
            value={details.first_name}
            name="first_name"
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
