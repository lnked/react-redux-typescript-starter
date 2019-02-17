import { observable, computed } from 'mobx'

const store = observable({
  students: observable.map(),
  courses: observable.map(),
  enrollment: observable.map(),

  addStudent (student) {
    if (this.students.has(student.id)) {
      throw new Error('student already exists')
    } else {
      this.students.set(student.id, student)
    }
  },

  updateStudent (student) {
    this.students.set(student.id, student)
  },

  removeStudent (id) {
    this.students.delete(id)
  },

  addCourse (course) {
    if (this.courses.has(course.id)) {
      throw new Error('course already exists')
    } else {
      this.courses.set(course.id, course)
    }
  },

  updateCourse (course) {
    this.courses.set(course.id, course)
  },

  removeCourse (id) {
    this.courses.delete(id)
  },

  enrollStudent (courseId, studentId) {
    if (!this.enrollment.get(courseId)) {
      this.enrollment.set(courseId, observable.array([]))
      this.enrollment.get(courseId).push(studentId)
    } else if (!this.enrollment.get(courseId).includes(studentId)) {
      this.enrollment.get(courseId).push(studentId)
    }
  },

  unenrollStudent (courseId, studentId) {
    this.enrollment.get(courseId).remove(studentId)
  },

  enrolledStudents (courseId) {
    return computed(() =>
      this.enrollment.get(courseId).map(n => this.students.get(n))).get()
  }
})

export default store
