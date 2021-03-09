import React, {useState} from "react"
import {useObtained, useObtainedUpdate} from "./statsContext";

const Item = (props) => {
  const obtained = useObtained()
  const setObtained = useObtainedUpdate()

  let imgStyle = {}
  let countStyle = {}

  const [count, setCount] = useState(0)

  if (props.notVisible) {
    imgStyle.display = 'none';
    countStyle.display = 'none';
  }

  if (count > 0) {
    imgStyle.background = '#9e9e9e';
  } else {
    imgStyle.filter = 'contrast(0.4)';
    countStyle.display = 'none'
  }

  return (
    <>
      <style jsx>{`
        .single-item {
          cursor: pointer;
        }

        .single-item > img {
          border: 2px solid #9e9e9e;
          margin: 2px;
          padding: 10px;
        }

        .single-item > img:hover {
          background: #9e9e9e;
          border: 2px solid white;
        }

        img[src*="vampire_lord"] {
          padding: 2px !important;
        }`
      }</style>
      <span className="single-item">
          <img
            src={props.imgSrc}
            alt={props.alt}
            style={imgStyle}
            onClick={() => {
              setCount(count + 1);
              setObtained();
            }}/>
            <span style={countStyle}>{count}</span>
      </span>
    </>
  )
}

export default Item