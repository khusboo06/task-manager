// "use client";

// import { CheckCircle, Trash2, Pencil } from "lucide-react";
// import api from "@/services/api";
// import toast from "react-hot-toast";


// export default function TaskCard({ task, refresh }: any) {

//     const [editing, setEditing] = useState(false);
// const [newTitle, setNewTitle] = useState(task.title);
//    const now = new Date();
//    const updateTask = async () => {
//   try {
//     await api.patch(`/tasks/${task.id}`, { title: newTitle });
//     setEditing(false);
//     refresh();
//     toast.success("Task updated ✏️");
//   } catch {
//     toast.error("Update failed");
//   }
// };
//   const dueDate = task.deadline ? new Date(task.deadline) : null;

//   let status = "";
//   let color = "";

//   if (dueDate) {
//     const diff =
//       (dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

//     if (diff < 0) {
//       status = "Overdue ❌";
//       color = "text-red-400";
//     } else if (diff <= 2) {
//       status = "Due Soon ⚠️";
//       color = "text-yellow-400";
//     } else {
//       status = "On Track ✅";
//       color = "text-green-400";
//     }
//   }

//   const toggleTask = async () => {
//     try {
//       await api.patch(`/tasks/${task.id}/toggle`);
//       refresh();
//       toast.success("Task updated ✅");
//     } catch {
//       toast.error("Error updating task");
//     }
//   };

//   const deleteTask = async () => {
//     try {
//       await api.delete(`/tasks/${task.id}`);
//       refresh();
//       toast.success("Task deleted 🗑️");
//     } catch {
//       toast.error("Error deleting task");
//     }
//   };

//   return (
//     <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg flex justify-between items-center hover:scale-[1.02] transition">

      



//       <div className="flex flex-col">
//   <h2
//     className={`text-lg ${
//       task.completed
//         ? "line-through text-gray-400"
//         : "text-white font-medium"
//     }`}
//   >
//     {task.title}
//   </h2>

//   {task.deadline && (
//     <p className={`text-sm ${color}`}>
//       {new Date(task.deadline).toLocaleDateString()} • {status}
//     </p>
//   )}
// </div>

//       {/* ACTION BUTTONS */}
//       <div className="flex gap-4">

//         <button
//           onClick={toggleTask}
//           className="hover:scale-110 transition"
//         >
//           <CheckCircle
//             className={
//               task.completed ? "text-green-400" : "text-gray-400"
//             }
//           />
//         </button>

//         <button
//           onClick={deleteTask}
//           className="hover:scale-110 transition"
//         >
//           <Trash2 className="text-red-400" />
//         </button>

//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { CheckCircle, Trash2, Pencil } from "lucide-react";
import api from "@/services/api";
import toast from "react-hot-toast";

export default function TaskCard({ task, refresh }: any) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const now = new Date();

  const dueDate = task.deadline ? new Date(task.deadline) : null;

  let status = "";
  let color = "";

  if (dueDate) {
    const diff =
      (dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

    if (diff < 0) {
      status = "Overdue ❌";
      color = "text-red-400";
    } else if (diff <= 2) {
      status = "Due Soon ⚠️";
      color = "text-yellow-400";
    } else {
      status = "On Track ✅";
      color = "text-green-400";
    }
  }

  const updateTask = async () => {
    if (!newTitle.trim()) return toast.error("Title cannot be empty");

    try {
      await api.patch(`/tasks/${task.id}`, { title: newTitle });
      setEditing(false);
      refresh();
      toast.success("Task updated ✏️");
    } catch {
      toast.error("Update failed");
    }
  };

  const toggleTask = async () => {
    try {
      await api.patch(`/tasks/${task.id}/toggle`);
      refresh();
      toast.success("Task updated ✅");
    } catch {
      toast.error("Error updating task");
    }
  };

  const deleteTask = async () => {
    try {
      await api.delete(`/tasks/${task.id}`);
      refresh();
      toast.success("Task deleted 🗑️");
    } catch {
      toast.error("Error deleting task");
    }
  };

  return (
  <div className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:scale-[1.02] transition">

    {/* LEFT SIDE */}
    <div className="flex flex-col w-full">

      {editing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="bg-black/30 p-2 rounded text-white w-full text-sm sm:text-base"
        />
      ) : (
        <h2
          className={`text-sm sm:text-lg ${
            task.completed
              ? "line-through text-gray-400"
              : "text-white font-medium"
          }`}
        >
          {task.title}
        </h2>
      )}

      {task.deadline && (
        <p className={`text-xs sm:text-sm ${color}`}>
          {new Date(task.deadline).toLocaleDateString()} • {status}
        </p>
      )}
    </div>

    {/* ACTION BUTTONS */}
    <div className="flex gap-3 sm:gap-4 items-center justify-end w-full sm:w-auto">

      {/* TOGGLE */}
      <button onClick={toggleTask} className="hover:scale-110 transition">
        <CheckCircle
          className={
            task.completed ? "text-green-400" : "text-gray-400"
          }
          size={18} // ✅ mobile small
        />
      </button>

      {/* EDIT */}
      <button
        onClick={() => (editing ? updateTask() : setEditing(true))}
        className="hover:scale-110 transition"
      >
        <Pencil className="text-blue-400" size={18} />
      </button>

      {/* DELETE */}
      <button onClick={deleteTask} className="hover:scale-110 transition">
        <Trash2 className="text-red-400" size={18} />
      </button>

    </div>
  </div>
);
}