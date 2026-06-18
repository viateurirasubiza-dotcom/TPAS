import { db } from "./firebase.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

window.saveAttendance = function () {
  let name = document.getElementById("studentName").value;
  let status = document.getElementById("status").value;

  push(ref(db, "attendance"), {
    student: name,
    status: status,
    date: new Date().toISOString()
  });

  alert("Saved!");
};
