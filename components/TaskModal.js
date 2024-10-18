import React, { useState, useEffect } from "react";

const TaskModal = ({ isOpen, onClose, onSubmit }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskLabel, setTaskLabel] = useState("low");

  // Clear input fields when the modal is closed
  useEffect(() => {
    if (!isOpen) {
      setTaskName("");
      setTaskDescription("");
      setTaskLabel("low");
    }
  }, [isOpen]);

  const handleSubmit = () => {
    const randomComments = Math.floor(Math.random() * 10) + 1;
    const randomFiles = Math.floor(Math.random() * 5) + 1;

    onSubmit({
      id: `task-${Date.now()}`, // Use timestamp as a unique ID
      title: taskName,
      para: taskDescription,
      label: taskLabel,
      comments: randomComments,
      files: randomFiles,
      image: null, // No image for simplicity
      UserList: [], // No users initially
    });
    onClose(); // Close the modal after submitting the task
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
        <input
          type="text"
          className="w-full mb-2 p-2 border rounded"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded mb-2"
          placeholder="Task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>

        <select
          className="w-full mb-4 p-2 border rounded"
          value={taskLabel}
          onChange={(e) => setTaskLabel(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="high">High</option>
          <option value="completed">Completed</option>
        </select>

        <div className="flex justify-between">
          <button className="bg-gray-300 p-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white p-2 rounded"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
