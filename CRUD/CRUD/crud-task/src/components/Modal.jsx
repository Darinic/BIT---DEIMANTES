import { useState } from "react";

const Modal = (props) => {

const [edited, setEdited] = useState({
  i:`${props.editing.index}`,
  name:`${props.editing.name}`,
  age:`${props.editing.age}`,
  secretIdentity:`${props.editing.secretIdentity}`,
  power:`${props.editing.power}`,
})

  const editChange = (e) => {
    setEdited({
      ...edited,
      [e.target.id]:e.target.value
    })
  }
  const submitHandler = () => {
    props.editFinish(edited, edited.i)
  }
  console.log(props.editing.index)
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{opacity:'1', display:'block'}}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Member
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.close}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  value={edited.name}
                  onChange={editChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age" className="col-form-label">
                  Age
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="age"
                  placeholder="Enter age"
                  value={edited.age}
                  onChange={editChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="secretIdentity" className="col-form-label">
                  Secret Identity
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="secretIdentity"
                  placeholder="Enter secret identity"
                  value={edited.secretIdentity}
                  onChange={editChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="power" className="col-form-label">
                  Power
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="power"
                  placeholder="Enter power"
                  value={edited.power}
                  onChange={editChange}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={props.close}
                >
                  Close
                </button>
                <button onClick={submitHandler} type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
