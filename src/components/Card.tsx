import React, { FC, useRef } from 'react';

import { useStore } from "hooks/useStore";

import { ITodo } from "interfaces/interfaces";

import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";

import { ItemTypes } from "../item-types/item-types";

import { XYCoord } from "dnd-core";

interface CardProps {
  todo: ITodo,
  index: number,
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
  index: number,
  id: string,
  type: string
}

const Card: FC<CardProps> = ({ todo, index, moveCard }) => {
  const {
    onToggle,
    onRemove
  } = useStore();

  const className = ['todo'];

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
      return { id: todo.id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  });

  if (todo.completed) {
    className.push('completed')
  }

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
      <li
          ref={ref}
          className={className.join(' ')}
          key={todo.id}
          style={{ opacity }}
          data-handler-id={handlerId}
      >
        <label>
          <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
          />
          <span>{todo.title}</span>
          <i
              className="material-icons red-text"
              onClick={() => onRemove(todo.id)}
          >
            delete
          </i>
        </label>
      </li>
  );
};

export default Card;
