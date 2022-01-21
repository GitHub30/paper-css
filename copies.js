addEventListener('DOMContentLoaded', () => {
  const copies = document.createElement('input')
  copies.classList.add('no-print', 'mt-8', 'mx-auto', 'block')
  copies.type = 'number'
  copies.placeholder = '部数'
  copies.min = 1
  copies.addEventListener('input', e => {
    document.querySelectorAll('.sheet.js-cloned').forEach(e => e.parentNode.removeChild(e))
    Array(parseInt(copies.value, 10) - 1).fill().forEach(() => {
      const cloned = document.querySelector('.sheet').cloneNode(true)
      cloned.classList.add('js-cloned')
      document.body.appendChild(cloned)
    })
  })
  document.body.insertBefore(copies, document.body.firstElementChild)
})
