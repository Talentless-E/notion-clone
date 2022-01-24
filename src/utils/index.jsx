export function getNestedArray(notes) {
  let map = {},
    note,
    tree = [],
    i;

  for (i = 0; i < notes.length; i += 1) {
    map[notes[i].id] = i;
    notes[i].children = [];
  }

  for (i = 0; i < notes.length; i += 1) {
    note = notes[i];
    if (note.parentId !== '-1') {
      notes[map[note.parentId]]?.children.push(note);
    } else {
      tree.push(note);
    }
  }
  return tree;
}
