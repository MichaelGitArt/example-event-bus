import { eventBus, favorites, teacher } from './data'

export const createSection = () => {
  // create teachers elements in .section div
  teacher.forEach((teacher) => {
    const teacherElement = document.createElement('div')
    teacherElement.dataset.teacher = JSON.stringify(teacher)

    teacherElement.innerHTML = `
      <h2>${teacher.name}</h2>
      <p>${teacher.age}</p>

      <span>Is favorite: ${favorites.includes(teacher.id) ? 'yes' : 'no'}</span>
      <button>Add to favorites</button>
  `
    // add to favorites
    teacherElement.querySelector('button')?.addEventListener('click', () => {
      console.warn('add to favorites')
      favorites.push(parseInt(teacher.id as any, 10))
      eventBus.emit('favorite-changed')
    })

    eventBus.on('favorite-changed', () => {
      teacherElement.querySelector<HTMLSpanElement>('span')!.innerText = `Is favorite: ${favorites.includes(teacher.id) ? 'yes' : 'no'}`
    })

    document.querySelector('.section')?.appendChild(teacherElement)
  })
}
