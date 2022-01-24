import React from 'react';
import uuid from 'react-uuid';
import '../css/main.css';
import Block from './Block';

const Main = ({ activeNote, onUpdateNote, setActiveNote, notes }) => {
  const onEditField = (key, value) => {
    setActiveNote({ ...activeNote, [key]: value });
  };

  const onEditParent = (parentId) => {
    setActiveNote({ ...activeNote, parentId });
  };

  const addBlock = (type) => {
    setActiveNote({
      ...activeNote,
      blocks: [...activeNote.blocks, { id: uuid(), type, data: null }],
    });
  };

  const saveBlock = (updatedBlock) => {
    const updatedBlocks = activeNote.blocks.map((block) =>
      block.id === updatedBlock.id ? updatedBlock : block
    );
    setActiveNote({ ...activeNote, blocks: updatedBlocks });
  };

  const deleteBlock = (id) => {
    const updatedBlocks = activeNote.blocks.filter((block) => block.id !== id);
    setActiveNote({ ...activeNote, blocks: updatedBlocks });
  };

  if (!activeNote)
    return (
      <div className='no-active-notes'>
        <p>no notes selected</p>
      </div>
    );

  return (
    <div className='main'>
      <div className='main-container'>
        <select
          value={activeNote.parentId}
          onChange={(e) => onEditParent(e.target.value)}
        >
          <option value={-1}>---</option>
          {notes.map((note) => (
            <option key={note.id} value={note.id}>
              {note.title}
            </option>
          ))}
        </select>
        <input
          type='text'
          id='title'
          className='main__note-title'
          value={activeNote.title}
          onChange={(e) => onEditField('title', e.target.value)}
          placeholder='enter title'
        />
        {activeNote.blocks.map((block) => (
          <Block key={block.id} block={block} onSave={saveBlock} onDelete={deleteBlock} />
        ))}
        <div>
          <button onClick={() => addBlock('TEXT')}>Текст</button>
          <button onClick={() => addBlock('IMAGE')}>Картинка</button>
          <button onClick={() => addBlock('VIDEO')}>Видео</button>
        </div>
        <button onClick={() => onUpdateNote(activeNote)}>Сохранить</button>
      </div>
    </div>
  );
};

export default Main;
