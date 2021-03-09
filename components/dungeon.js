import React from "react"

const Dungeon = (props) => {
   let style = {}

   if (props.isSelected) {
      style.backgroundColor = "#9e9e9e"
      style.border = "2px solid white"
   }

   return (
      <>
         <style jsx>{`
            .dungeons {
               text-align: center;
               overflow-x: scroll;
               display: inline-flex;
               justify-content: center;
               margin: 10px 0 10px 0;
               cursor: pointer;
               -ms-overflow-style: none; /* IE and Edge */
               scrollbar-width: none; /* Firefox */
            }

            .dungeons::-webkit-scrollbar {
               display: none; /* Chrome, Safari and Opera */
            }

            .dungeons > span {
               border-radius: 3px;
               background: dimgrey;
               padding: 20px;
               width: 100px;
               border: 2px solid #9e9e9e;
               margin: 0 5px 0 5px;
               white-space: normal;
            }

            .dungeons:hover > span {
               background: #9e9e9e;
               border: 2px solid white;
            }

            .dungeon-img {
               margin-top: 8px;
            }
         `}</style>
         <div onClick={props.onClick} className="dungeons">
            <span style={style}>
               {props.dungeon_name}
               <div>
                  <img
                     className="dungeon-img"
                     src={props.img_source}
                     alt={props.alt}/>
               </div>
            </span>
         </div>
      </>
   )
}

export default Dungeon
