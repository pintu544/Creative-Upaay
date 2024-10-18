"use client";
import React, { useState } from "react";
import Search from "@/assets/searchIcon.svg";
import Calendar from "@/assets/calendarIcon.svg";
import ArrowDown from "@/assets/arrowDownIcon.svg";
import Notification from "@/assets/notificationIcon.svg";
import MessageQ from "@/assets/messageQIcon.svg";
import EditIcon from "@/assets/editIcon.svg";
import Add2 from "@/assets/add2Icon.svg";
import Calendar2 from "@/assets/calendar2Icon.svg";
import Member from "@/assets/usersIcon.svg";
import Home from "@/assets/homeIcon.svg";
import Group from "@/assets/group600.svg";
import Filter from "@/assets/filterIcon.svg";
import LinkIcon from "@/assets/linkIcon.svg";
import Anima from "@/assets/anima.png";
import Image from "next/image";
import { AllList, UserList } from "@/arrays/main";
const Column = dynamic(() => import("./Column"), { ssr: false });
import { DragDropContext } from "react-beautiful-dnd";
import dynamic from "next/dynamic";

// Helper function to reorder tasks in the column
const reorderColumnList = (sourceCol, startIndex, endIndex) => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};

const Main = () => {
  const [list, setList] = useState(AllList);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [sortBy, setSortBy] = useState("dueDate"); // New sorting state

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceCol = list.columns[source.droppableId];
    const destinationCol = list.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...list,
        columns: {
          ...list.columns,
          [newColumn.id]: newColumn,
        },
      };
      setList(newState);
      return;
    }

    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...list,
      columns: {
        ...list.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setList(newState);
  };

  // Function to handle priority filter selection
  const handleFilterChange = (priority) => {
    setSelectedPriority(priority);
  };

  // Filter tasks based on the selected priority
  const filterTasks = (tasks) => {
    if (!selectedPriority) return tasks;
    return tasks.filter((task) => task?.priority === selectedPriority);
  };

  // Function to sort tasks based on selected criteria
  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
      switch (sortBy) {
        case "dueDate":
          return new Date(a.dueDate) - new Date(b.dueDate); // Assuming dueDate is a Date string
        case "priority":
          return a.priority.localeCompare(b.priority); // Assuming priority is a string
        case "title":
          return a.title.localeCompare(b.title); // Assuming tasks have a title
        default:
          return 0; // No sorting
      }
    });
  };

  return (
    <div className="flex-1">
      <header className="flex items-center justify-between border-b border-[#DBDBDB] px-6 py-3">
        <div className="bg-[#F5F5F5] flex items-center gap-6 px-4 py-2 rounded-md w-[50%]">
          <Search className="mdIcon" />
          <input
            placeholder="Search for anything..."
            className="outline-none bg-[#f5f5f5]"
          />
        </div>
        <div className="flex-1 flex items-center justify-end gap-[3rem]">
          <div className="flex items-center justify-between w-auto gap-4">
            <Calendar className="mdIcon" />
            <MessageQ className="mdIcon" />
            <div className="relative">
              <div className="absolute bottom-[70%] right-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8727D] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8727D]"></span>
                </span>
              </div>
              <Notification className="mdIcon" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[.9rem]">Anima Agrawal</p>
              <p className="text-[.7rem]">U.P, India</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Anima} alt={Anima} height={30} width={30} />
              <ArrowDown className="smIcon" />
            </div>
          </div>
        </div>
      </header>
      <section className="my-[2rem] flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-semibold">Mobile App</h1>
          <div className="flex items-center gap-4">
            <div className="bg-[#5030E5]/20 p-1 rounded-[.5rem]">
              <EditIcon className="smIcon text-[#5030E5]" />
            </div>
            <div className="bg-[#5030E5]/20 p-1 rounded-[.5rem]">
              <LinkIcon className="smIcon text-[#5030E5]" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Add2 className="w-5 h-5 text-[#5030E5]" />
          <p className="text-[1rem] text-[#5030E5] font-medium">Invite</p>
          <ul className="flex items-center -space-x-2">
            {UserList.slice(-4).map((data, index) => (
              <li className="w-8 h-8" key={index}>
                <Image
                  src={data.image}
                  alt={"..."}
                  height={100}
                  width={100}
                  className={"w-full h-full"}
                />
              </li>
            ))}
            {UserList.length > 4 && (
              <li className="w-8 h-8 bg-[#F4D7DA] rounded-full flex items-center justify-center text-[#D25B68]">
                +{UserList.length - 4}
              </li>
            )}
          </ul>
        </div>
      </section>
      <section className="mt-[2rem] flex items-center justify-between px-6">
        <div className="flex items-center gap-4 text-[#787486]">
          <div className="flex items-center px-3 py-2 rounded-md border-[#787486] border">
            <Filter className="smIcon " />
            <span className="ml-3 mr-5">Filter</span>
            <ArrowDown className="smIcon" />
            <select
              onChange={(e) => handleFilterChange(e.target.value)}
              className="ml-2"
            >
              <option value="">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex items-center px-3 py-2 rounded-md border-[#787486] border">
            <Calendar2 className="smIcon" />
            <span className="ml-3 mr-5">Today</span>
            <ArrowDown className="smIcon" />
          </div>
        </div>
        <div className="flex items-center gap-5 text-[#787486] divide-x divide-[#787486]">
          <div className="flex items-center px-3 py-2 gap-2 rounded-md border-[#787486] border">
            <Member className="smIcon" />
            <p>Share</p>
          </div>
          <div className="pl-5 flex items-center gap-5">
            <div className="bg-[#5030E5] p-2 rounded-[.5rem]">
              <Group className="mdIcon" />
            </div>
            <Home className="mdIcon" />
          </div>
        </div>
      </section>
      <section className="my-[2rem] flex items-start flex-wrap gap-4 w-full px-6">
        <DragDropContext onDragEnd={onDragEnd}>
          {list.columnOrder.map((data, index) => {
            const column = list.columns[data];
            const taskList = sortTasks(
              filterTasks(column.taskIds.map((data) => list.tasks[data]))
            );
            return <Column list={taskList} column={column} key={index} />;
          })}
        </DragDropContext>
      </section>
    </div>
  );
};

export default Main;
