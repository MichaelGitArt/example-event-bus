import { eventBus, favorites } from './data'

// create modal for teacher and put into .app div
export const createModal = (teacher: any) => {
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.innerHTML = `
    <div class="modal-content">
      <span>Is favorite: ${favorites.includes(teacher.id) ? 'yes' : 'no'}</span>

      <br>
    
      <span class="close">&times;</span>
      <h2>${teacher.name}</h2>
      <p>${teacher.age}</p>
      <button>Add to favorites</button>
    </div>
  `
  // add to favorites
  modal.querySelector('button')?.addEventListener('click', () => {
    console.warn('add to favorites')
    favorites.push(parseInt(teacher.id as any, 10))
    eventBus.emit('favorite-changed')
  })

  eventBus.on('favorite-changed', () => {
    modal.querySelector('span')!.innerText = `Is favorite: ${favorites.includes(teacher.id) ? 'yes' : 'no'}`
  })

  document.querySelector('#app')?.appendChild(modal)
}

// add styles to modal
const style = document.createElement('style')
style.innerHTML = `
  .modal {
    // display: none;
    position: fixed;
    z-index: 1;
    color: white;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    overflow: auto;
    background-color: rgb(0, 0, 0);
  }`
document.head.appendChild(style)
