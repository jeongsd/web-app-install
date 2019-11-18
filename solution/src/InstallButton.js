import React from "react";

function InstallButton() {
  const [installable, setInstallable] = React.useState(false);

  const deferredPrompt = React.useRef();
  React.useEffect(() => {
    function handleBeforeinstallprompt(e) {
      deferredPrompt.current = e;
      setInstallable(true);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeinstallprompt);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeinstallprompt
      );
    };
  });

  function handleInstallClick() {
    setInstallable(false);
    deferredPrompt.current.prompt();
    deferredPrompt.current.userChoice.then(choiceResult => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt.current = null;
    });
  }

  return (
    <div class={installable ? "animated jello infinite" : ""}>
      <button disabled={!installable} onClick={handleInstallClick}>
        설치
      </button>
    </div>
  );
}

export default InstallButton;
