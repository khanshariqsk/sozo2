import React, { useState } from "react";
import { Stage, RegularPolygon, Layer, Circle, Transformer } from "react-konva";

const Triangles = ({ shapeProps, isSelected, onSelect, onChange,col }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  const [getcolor,setIscolor] = useState(null);
  function onColorChange(){
    setIscolor(col);
  }

  return (
    <>
      <RegularPolygon
      sides={3}
        onClick={onColorChange}
        onDblClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        stroke="black"
        strokeWidth={1}
        fill={getcolor ||"white"}
        opacity={0.8}
        
        draggable
       
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
         
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};
export default Triangles