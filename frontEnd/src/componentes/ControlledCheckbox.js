import * as React from 'react';

import "../styles/ControlledCheckbox.css"

export default function ControlledCheckbox() {
 

  

  return (
    <div class="container4">
  <ul class="ks-cboxtags">
    <li><input type="checkbox" id="checkboxNine" value="Princess Celestia"/><label for="checkboxNine">Aduentus Classic Blend</label></li>
    <li><input type="checkbox" id="checkboxTen" value="Gusty"/><label for="checkboxTen">Aduentus Classic Blend</label></li>
    <li class="ks-selected"><input type="checkbox" id="checkboxEleven" value="Discord"/><label for="checkboxEleven">Aduentus Classic Blend</label></li>
    <li><input type="checkbox" id="checkboxTwelve" value="Clover"/><label for="checkboxTwelve">Aduentus Classic Blend</label></li>
  </ul>

</div>
  );
}
