import React, { useState } from "react";
import { Stage, Shape, Layer, Transformer } from "react-konva";

const Square = ({ shapeProps, isSelected, onSelect, onChange,col }) => {
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
      <Shape
        onClick={onColorChange}
        onDblClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        stroke="black"
        strokeWidth={1}
        fill={getcolor ||"white"}
        opacity={0.8}
        
        draggable
        sceneFunc={function (context, shape) {
          context.beginPath();

          context.rect(
            0,
            0,
            shape.getAttr("width"),
            shape.getAttr("height"),
            shape.getAttr("fill")
          );

          context.fillStrokeShape(shape);
        }}
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
export default Square