//adds "east" and "south" to grid data array wherever appropriate
//"east" and "south" used to render borders in GridCell.js
//index used to track sprite positions in GridCell.js
export const addProps = (arr, size) => {
  for (let cell of arr) {
    //adds east and south
    const index = arr.indexOf(cell);
    if ((index + 1) % size === 0) {
      cell.push("east");
    }
    if (index >= Math.pow(size, 2) - size) {
      cell.push("south");
    }
    //adds index number
    cell.push(index);
  }
  return arr;
};
