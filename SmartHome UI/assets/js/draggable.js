const cards = document.querySelectorAll('.card');
const cardContainer = document.getElementById('card-container');

cards.forEach(card => {
  card.addEventListener('dragstart', () => {
    card.classList.add('dragging');
  })

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
  })

})

cardContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  const afterELement = getDragAfterElement(cardContainer, e.clientY);
  console.log(afterELement);
  const currentDrag = document.querySelector('.dragging');
  if(afterELement === null) {
    cardContainer.appendChild(currentDrag);
  } else {
    cardContainer.insertBefore(currentDrag, afterELement)
  }
  
})

function getDragAfterElement(container, y) {
  const draggableCards = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableCards.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if(offset < 0 && offset > closest.offset) {
      return {offset: offset, element:child}
      } else {
        return closest;
      }
  }, {offset: Number.NEGATIVE_INFINITY}).element

}