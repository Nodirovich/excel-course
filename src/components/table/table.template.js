const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function createCol(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(col, index = '') {
  return `
    <div class="row">
      <div class="row-info">${index}</div>
      <div class="row-data">${col}</div>
    </div>
  `
}

function toChar(index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map((el, index) => {
        const col = toChar(index)
        return createCol(col)
      })
      .join('')

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('')

    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}
