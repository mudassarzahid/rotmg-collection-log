import React, {useState} from "react";
import Item from "../components/item";
import Dungeon from "../components/dungeon";
import Stats from "../components/stats";
import ItemContainer from "../components/itemContainer";
import Headline from "../components/headline";
import {StatsProvider} from '../components/statsContext';


const App = () => {
  const dungeonList = require('../public/data/dungeons.json')
  const itemList = require('../public/data/items.json')
  const itemContainer = ['mark', 'white', 'red', 'orange', 'cyan', 'gold', 'purple']

  const [dungeonVisibility, setDungeonVisibility] = useState(dungeonList[0]['name'])
  const [itemVisibility, setItemVisibility] = useState(dungeonList[0]['items'])

  const getItemList = (bagColor) => React.Children.toArray(
    itemList.map((items_data) => (
      <Item
        name={items_data.name}
        imgSrc={items_data.img_src}
        alt={items_data.img_alt}
        itemTier={items_data.tier}
        notVisible={
          !(itemVisibility.includes(items_data.name)) ||
          !(bagColor === items_data.tier)
        }/>
    ))
  );

  return (
    <>
      <StatsProvider>
        <style jsx global>{`
          body {
            background: #252525;
            font-family: monospace;
            color: white;
          }

          .all-dungeons {
            width: 100%;
            text-align: center;
            white-space: nowrap;
            overflow: scroll;
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }

          .all-dungeons > div {
            height: 141px;
          }

          .all-dungeons::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
          }

          .items-row {
            display: flex;
          }

          .all-items {
            padding: 8px;
            border-radius: 3px;
            background: dimgrey;
            border: 2px solid #9e9e9e;
          }

          .items-list {
            white-space: nowrap;
            overflow: scroll;
          }

          .item-category-icon > span > img {
            border: none !important;
          }

          .item-category-icon > span > img:hover {
            border: none !important;
          }
        `}</style>
        <div className="App">
          <body>

          <Headline title="Total Unique Items"/>

          <Stats/>

          <Headline title="Dungeons"/>
          <Dungeon
            onClick={() => {
              setDungeonVisibility(dungeonList[0].name)
              setItemVisibility(dungeonList[0].items)
            }}
            dungeon_name={dungeonList[0].name}
            img_source={dungeonList[0].img_src}
            alt={dungeonList[0].img_alt}
            isSelected={
              dungeonVisibility === dungeonList[0].name
            }/>

          <div className="all-dungeons">
            {React.Children.toArray(
              dungeonList.slice(1).map(dungeons_data => (
                <Dungeon
                  onClick={() => {
                    setDungeonVisibility(dungeons_data.name)
                    setItemVisibility(dungeons_data.items)
                  }}
                  dungeon_name={dungeons_data.name}
                  img_source={dungeons_data.img_src}
                  alt={dungeons_data.img_alt}
                  isSelected={
                    dungeonVisibility === dungeons_data.name
                  }/>
              ))
            )}
          </div>

          <Headline title="Items"/>
          <div className="all-items">
            {React.Children.toArray(
              itemContainer.map(container => (
                <ItemContainer
                  containerTier={container}
                  itemList={getItemList(container)}
                  containerVisible={true}/>
              ))
            )}
          </div>

          </body>
        </div>
      </StatsProvider>
    </>
  )
}

export default App;