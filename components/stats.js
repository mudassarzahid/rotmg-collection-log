import React from "react"
import {useObtained} from "./statsContext";

const Stats = (props) => {

  const counter = useObtained()
  const numberItems = 94;

  let style = {
    width: `${(counter/numberItems)*100}%`
  }

  return (
    <>
      <style jsx>{`
        .progress-bar {
          height: 5px;
          background: #555;
          border-radius: 2px;
          padding: 5px;
          border: 2px solid #9e9e9e;
        }

        .progress-bar > span {
          display: block;
          height: 100%;
          border-radius: 2px;
          background-color: #ffc107;
        }

        .progress-bar:hover {
          cursor: pointer;
        }
      `}</style>
      <div className="stats">
        <div className="progress-bar">
          <span style={style}/>
        </div>
      </div>
    </>
  )
}

export default Stats
