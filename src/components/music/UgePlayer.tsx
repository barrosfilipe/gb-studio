import { ipcRenderer } from "electron";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
// import Player from "./helpers/player";

interface UgePlayerProps {
  song: string,
  data: any,
  onPlaybackUpdate?: Function
}

export const UgePlayer = ({
  data,
  onPlaybackUpdate
}: UgePlayerProps) => {
  console.log("UGE PLAYER START")

  useEffect(() => {
    console.log("OPEN MUSIC")
    ipcRenderer.send(
      "open-music"
    );
  }, []);

  const play = useSelector(
    (state: RootState) => state.editor.playSong
  );

  useEffect(() => {
    console.log('set playback update');

    ipcRenderer.removeAllListeners("music-data");
    ipcRenderer.on("music-data", (event: any, d: any) => {
      switch (d.action) {
        case "update":
          if (onPlaybackUpdate) {
            console.log(d.update);
            onPlaybackUpdate(d.update);
          }
          break;
        case "log":
          console.log(d.message);
          break;
        default:
          console.log(`Action ${d.action} not supported`);
      }
    })
  }, [onPlaybackUpdate, play]);

  useEffect(() => {
    console.log(play);
    if (play) {
      ipcRenderer.send(
        "music-data-send",
        {
          action: "play",
          song: data
        }
      );
    } else {
      ipcRenderer.send(
        "music-data-send",
        {
          action: "stop",
        }
      );
    }
  }, [play, data])

  return (
    <div />
  )
}