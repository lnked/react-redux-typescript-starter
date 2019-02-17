import React from 'react'
import { observer } from 'mobx-react'
import store from './store'

const student1 = {
  id: 'student1',
  name: 'Ben'
}

const student2 = {
  id: 'student2',
  name: 'Nikki'
}

const course1 = {
  id: 'course1',
  name: 'Math 101'
}

store.addStudent(student1)
store.addStudent(student2)
store.addCourse(course1)
store.enrollStudent(course1.id, student1.id)

const StudentsList = () => {
  return (
      <div>
          <h2>{course1.name}</h2>
          <ul>
              {store.enrolledStudents(course1.id).map(
                  n => <li key={n.id}>{n.name}</li>
              )}
          </ul>
          <button
              onClick={() => store.enrollStudent(course1.id, student2.id)}
          >Enroll Student 2</button>
      </div>
  )
}

export default observer(StudentsList)
