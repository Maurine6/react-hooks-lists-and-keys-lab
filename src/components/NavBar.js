import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const display = links.map((link,index)=>(
    <a key={index} href={'#'+ link}> {link}</a>
  ))

  return (<nav>{/* display an <a> tag for each link here */}
  {display}
  </nav>);
}

export default NavBar;
