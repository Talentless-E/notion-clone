import React, { useRef } from 'react';

const ImageBlock = ({ url, onSave, editing }) => {
  const ref = useRef(null);

  if (url === null || editing) {
    return (
      <div>
        <input ref={ref} placeholder={'Введите URL картинки'} />
        <button onClick={() => onSave(ref.current.value)}>Сохранить</button>
      </div>
    );
  }

  return <img src={url} />;
};

export default ImageBlock;
