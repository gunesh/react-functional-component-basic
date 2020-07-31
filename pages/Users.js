import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { getMaxValue } from "../../utility/utility";
const User = () => {
  const [loader, setLoader] = useState(false);
  const [view, setView] = useState("LIST");
  const [details, setDetails] = useState({});
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const getMaxId = (arr, prop) => {
    var max;
    for (var i = 0; i < arr.length; i++) {
      if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
        max = arr[i];
    }
    return max;
  };
  const fetchApi = () => {
    setLoader(true);
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        result => {
          setLoader(false);
          setData(result.data);
        },
        error => {
          setLoader(false);
        }
      );
  };
  const onBack = () => {
    setView("LIST");
  };
  const deleteUser = id => {
    setLoader(true);
    let response = fetch("https://reqres.in/api/users/" + id, {
      method: "DELETE"
    })
      .then(response => {
        console.log(response);
        setLoader(false);
        if (response.status == 204) {
          console.log("Delete user" + id);
          console.log(data);
          let newList = data.filter(function(item) {
            return item.id !== id;
          });
          setData(newList);
        } else {
          console.log("There is problem to delete this record");
        }
        setView("LIST");
      })
      .then(result => {});
  };
  const viewUser = item => {
    setDetails(item);
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
    e.preventDefault();
    setLoader(true);
    //console.log(getMaxValue(data,'id'))

    let response = fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        name: "morpheus",
        job: "leader"
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        console.log("Add New user form");
        setLoader(false);
        // var maxId = getMax(data, "id");
        // console.log(maxId)
        let newid = data.length;
        data.push({
          id: newid + 1,
          email: "abc@reqres.in",
          first_name: "ABC",
          last_name: "DEF",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        });
        setView("LIST");
      });
  };
  const updateFormSubmit = e => {
    e.preventDefault();
    setLoader(true);
    let response = fetch("https://reqres.in/api/users/2", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        name: "morpheus",
        job: "leader"
      })
    })
      .then(response => response.json())
      .then(result => {
        setLoader(false);
        console.log(result);
        console.log("Update user form");
        setView("LIST");
      });
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
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            fetchApi();
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
     

      <h4>Users Management</h4>
      {pageView()}
    </>
  );
};
export default User;
