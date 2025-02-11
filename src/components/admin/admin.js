import Styles from '../../scss/adminItem.module.scss';
import React, { useRef, useState } from 'react';
import useRefInfo from '../../hooks/admin';
// import { updateRef } from '../../firebase/index';
import { updateRef } from '../../firebase';
import JSONEditor from 'jsoneditor';
import { useEffect } from 'react';
import 'jsoneditor/dist/jsoneditor.min.css';

const Admin = ({ referencia = '', callback = () => {} }) => {
  const [info, setInfo] = useState({});
  const [infoEdited, setInfoEdited] = useState({});
  const refContainer = useRef();
  let data = useRefInfo(referencia);
  let editor = null;

  useEffect(() => {
    if (data) {
      editor = new JSONEditor(refContainer.current, {
        onEvent: function (node, event) {
          if (event.type === 'blur') {
            // let newItemJSON = {};
            // newItemJSON[node.field] = node.value;
            setInfoEdited(node);
          }
        },
      });
      const initialJson = {
        ...data,
      };
      editor.set(initialJson);
      setInfo(initialJson);
    }
  }, [data]);
  useEffect(() => {
    let infoTemp = { ...info };
    if (Object.keys(infoTemp).length && Object.keys(infoEdited).length) {
      getNodeAndInsert(infoTemp, infoEdited.path, infoEdited.value);
      setInfo(infoTemp);
    }
  }, [infoEdited]);

  const saveJson = (e) => {
    updateRef(referencia, info, () => {
      window.location.reload();
    });
  };

  function getNodeAndInsert(node, arrayItems, value) {
    if (arrayItems.length <= 0) {
      return;
    }
    if (arrayItems.length == 1) {
      let nodo = arrayItems.shift();
      node[nodo] = value;
      return;
    }
    let nodo = arrayItems.shift();
    return getNodeAndInsert(node[nodo], arrayItems, value);
  }

  return (
    <div>
      <div
        onClick={(e) => callback(false)}
        className={`${Styles.admin_background}`}
      ></div>
      <div className={`${Styles.admin} p-2`}>
        <div
          className={`${Styles.admin_action} action d-flex justify-content-end aling-items-center p-2`}
        >
          <i onClick={(e) => callback(false)} className='gg-close'></i>
        </div>
        <div ref={refContainer}></div>
        <div className='bottomAction p-2 d-flex justify-content-end aling-items-center'>
          <button onClick={saveJson} type='button' className='btn btn-primary'>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Admin;