import React, { useState, useEffect } from "react";
import { Button } from "@dhis2/ui-core/build/es/Button";

const useAudio = url => {
  const [audio] = React.useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <Button
        success
        initialFocus
        name="Button"
        onClick={toggle}
        type="button"
        value="default"
      >
        {playing ? "Pause" : "Play"}
      </Button>
    </div>
  );
};
export default Player;
