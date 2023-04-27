import React from "react";
import "./NotFound.css";
function NotFound() {
  return (
    <div  className="container" class="my">
      {/* page is not found
     <div> <button type="button" class="btn btn-warning">home</button></div> */}
      <div className="container" class="mainbox">
        <div className="col-4" class="err">4</div>
        <div className="col-4" class="err">0</div>
        <div className="col-4" class="err">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <a href="/Home">Home</a> and try from there.
          </p>
        </div>  
      </div>
    </div>
  );
}
export default NotFound;
