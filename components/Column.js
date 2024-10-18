import React, { useState } from "react";
import ThreeDots from "@/assets/threeDotsIcon.svg";
import Message from "@/assets/messageIcon.svg";
import Add2 from "@/assets/add2Icon.svg";
import Folder from "@/assets/folderIcon.svg";
import Image from "next/image";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TaskModal from "./TaskModal"; // Import the modal component

const Column = ({ list, column }) => {
  const [tasks, setTasks] = useState(list);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle adding a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Droppable droppableId={column.id}>
      {(droppableProvided, droppableSnapshot) => (
        <div
          className="w-[32%] p-4 rounded-[1rem] bg-[#F5F5F5]"
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
        >
          <div
            className={`flex items-center justify-between w-full border-[${column.color}] border-b-2 pb-[1rem]`}
          >
            <h1 className="font-semibold">
              <span
                className={`inline-block w-2 h-2 bg-[${column.color}] rounded-full mr-2`}
              ></span>
              {column.title}
              <span className="inline-flex items-center justify-center ml-2 text-sm text-[#625F6D] font-semibold rounded-full bg-[#E0E0E0] w-6 h-6">
                {tasks.length}
              </span>
            </h1>
            {column.icon === true && (
              <Add2
                className="w-8 h-8 text-[#5030E5]"
                onClick={handleOpenModal}
              />
            )}
          </div>

          {tasks.map((data, index) => (
            <Draggable key={data.id} draggableId={`${data.id}`} index={index}>
              {(draggableProvided, draggableSnapshot) => (
                <div
                  className="py-3 px-4 my-[1rem] rounded-[.5rem] bg-white"
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.draggableProps}
                  {...draggableProvided.dragHandleProps}
                >
                  <div className="flex items-center justify-between">
                    {data.label === "low" && (
                      <p
                        className={`px-3 py-1 rounded-md bg-[#DFA874]/20 text-[#DFA874] text-[.7rem] capitalize`}
                      >
                        {data.label}
                      </p>
                    )}
                    {data.label === "high" && (
                      <p
                        className={`px-3 py-1 rounded-md bg-[#D8727D]/20 text-[#D8727D] text-[.7rem] capitalize`}
                      >
                        {data.label}
                      </p>
                    )}
                    {data.label === "completed" && (
                      <p
                        className={`px-3 py-1 rounded-md bg-[#68B266]/20 text-[#68B266] text-[.7rem] capitalize`}
                      >
                        {data.label}
                      </p>
                    )}
                    <ThreeDots className="mdIcon" />
                  </div>
                  <h2 className="text-lg font-bold capitalize my-2">
                    {data.title}
                  </h2>
                  {data.para && (
                    <p className="text-sm text-[#787486] my-2">{data?.para}</p>
                  )}
                  {data.image && (
                    <div className="flex gap-2">
                      {data.image.map((data, index) => (
                        <div
                          className="max-h-[10rem] h-full w-full"
                          key={index}
                        >
                          <Image
                            src={data.img}
                            alt={data.name}
                            height={100}
                            width={100}
                            className={"w-full h-full"}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-3">
                    <ul className="flex items-center -space-x-[9px]">
                      {data?.UserList?.slice(-3).map((data, index) => (
                        <li className="w-6 h-6" key={index}>
                          <Image
                            src={data.image}
                            alt={"..."}
                            height={100}
                            width={100}
                            className={"w-full h-full"}
                          />
                        </li>
                      ))}
                      {data?.UserList?.length > 3 && (
                        <li className="w-6 h-6 bg-[#F4D7DA] rounded-full text-[.7rem] flex items-center justify-center text-[#D25B68]">
                          +{data?.UserList?.length - 3}
                        </li>
                      )}
                    </ul>
                    <div className="flex items-center justify-between gap-2 text-[#787486]">
                      <div className="flex items-center gap-1">
                        <Message className="w-4 h-4" />
                        <p className="text-[.8rem]">{data.comments} comments</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Folder className="w-4 h-4" />
                        <p className="text-[.8rem]">{data.files} files</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}

          {/* Task Modal */}
          <TaskModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSubmit={handleAddTask}
          />
        </div>
      )}
    </Droppable>
  );
};

export default Column;
