import React from "react";

function InstallButton() {
  const [installable, setInstallable] = React.useState(false);

  return (
    <div class={installable ? "animated jello infinite" : ""}>
      <button disabled={!installable}>설치</button>
    </div>
  );
}

export default InstallButton;
