import React from "react"

const ItemContainer = (props) => {
  let style = {};

  if (!props.containerVisible) {
    style.display = 'none';
  }

  let categorySrc, categoryAlt;

  switch (props.containerTier) {
    case 'mark': {
      categorySrc = "/images/mark.png"
      categoryAlt = "mark"
      break;
    }

    case 'white': {
      categorySrc = "/images/white.png"
      categoryAlt = "white"
      break;
    }

    case 'red': {
      categorySrc = "/images/red.png"
      categoryAlt = "red"
      break;
    }

    case 'purple': {
      categorySrc = "/images/purple.png"
      categoryAlt = "purple"
      break;
    }

    case 'cyan': {
      categorySrc = "/images/cyan.png"
      categoryAlt = "cyan"
      break;
    }

    case 'orange': {
      categorySrc = "/images/orange.png"
      categoryAlt = "orange"
      break;
    }

    case 'gold': {
      categorySrc = "/images/gold.png"
      categoryAlt = "gold"
      break;
    }
  }

  return (
    <>
      <style jsx>{`
        .category-item > img {
          margin: 2px;
          padding: 10px;
        }

        .items-row {
          display: flex;
        }

        .items-list {
          white-space: nowrap;
          overflow: scroll;
        }`}</style>
      <div className="items-row" style={style}>
        <div className="item-category-icon">
          <span className="category-item">
            <img
              src={categorySrc}
              alt={categoryAlt}/>
          </span>
        </div>

        <div className="items-list">
          {props.itemList}
        </div>
      </div>
    </>
  )
}

export default ItemContainer