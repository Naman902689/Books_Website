import {  Link } from "react-router-dom";
const navbar= () =>{
  
  return (
    <header>
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/Action">Action</Link>
      </li>
      <li className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/classics">classics</Link>
      </li>
      <li className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/Comic">Comic</Link>
      </li>
      <li className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link " to="/Fantasy">Fantasy</Link>
      </li>
      <li className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link " to="/Horror">Horror</Link>
      </li>
    </ul>
  </div>
</nav>
<div>
</div>
  </div>
  </header>
  );
}
export default navbar;