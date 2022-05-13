import './style.css'
import { eventBus, teacher } from './teacher/data'
import { createModal } from './teacher/modal'
import { createSection } from './teacher/section'

const app = document.querySelector<HTMLDivElement>('#app')!

createSection()
// add event listener for all h2 elements and open modal
app.addEventListener('click', (event: Event) => {
  if ((event.target as HTMLElement).tagName === 'H2') {
    console.warn(event.target)
    const teacher = (event.target as HTMLElement).parentElement?.dataset.teacher
    console.warn('teacher', teacher)

    if (teacher) {
      const teacherObj = JSON.parse(teacher)
      createModal(teacherObj)
    }
  }
})

// createModal(teacher[1])

eventBus.on('favorite-changed', () => {
  console.warn('favorite-changed from main.ts')
})
