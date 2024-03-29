import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
function App() {
  const [students, setStudents] = useState([])

  const fetchstudents = async () => {

    try {
      const students = await axios.get("http://127.0.0.1:8000/api/student/")
      console.log(students.data)

      setStudents(students.data)


    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    fetchstudents()

  }, [])
  return (
    <div className="App">
      <h1>hello</h1>
      {
        students.map((student) => {
          return (
            <>
              <h1>{student.stuname}</h1>
              <h1>{student.email}</h1>
            </>

          )
        })
      }


    </div>
  );
}

export default App;
