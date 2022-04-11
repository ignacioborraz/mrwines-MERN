import * as React from 'react'

import "../styles/ControlledCheckbox.css"

export default function ControlledCheckbox(props) {
  return (
    <div className="container4">
      <ul className="ks-cboxtags">
        <li><input type="checkbox" id="checkboxNine" value="Princess Celestia"/><label htmlFor="checkboxNine">{props.type}</label></li>
      </ul>
    </div>
  )
}
