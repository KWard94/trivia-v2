// import { CloseButton } from "react-bootstrap";
import "./noPageFound.scss";

// import Button from "react-bootstrap/Button";
import { Button } from "react-bootstrap";

function noPageFound() {
  return (
    <div className="main_content container-fluid">
      {/* <div>
        <h1>This Page Does Not Exist, Sorry!</h1>
      </div> */}
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Page Not Found</h1>
          <p class="lead">We are sorry, this page does not exist</p>
        </div>
        <Button type="button" class="btn btn-outline-primary">
          Back
        </Button>
      </div>
    </div>
  );
}

export default noPageFound;
