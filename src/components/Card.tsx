import React, { FC, useRef } from 'react';

import { useStore } from "@hooks/useStore";

import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";

import { ItemTypes } from "@item-types/item-types";

import { XYCoord } from "dnd-core";
import {useCardMoving} from "@hooks/useCardMoving";

interface CardProps {
  id: number,
  title: string,
  completed: boolean,
  index: number,
}

interface DragItem {
  index: number,
  id: string,
  type: string
}

const Card: FC<CardProps> = ({ id, title, completed, index }) => {
  const {
    onToggle,
    onRemove
  } = useStore();

  const className = ['todo'];

  const moveCard = useCardMoving();

  const ref = useRef<HTMLLIElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  });

  if (completed) {
    className.push('completed')
  }

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
      <li
          ref={ref}
          className={className.join(' ')}
          key={id}
          style={{ opacity }}
          data-handler-id={handlerId}
      >
        <label>
          <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggle(id)}
          />
          <span>{title}</span>
          <i
              className="material-icons red-text"
              onClick={() => onRemove(id)}
          >
            delete
          </i>
        </label>
      </li>
  );
};

export default Card;
