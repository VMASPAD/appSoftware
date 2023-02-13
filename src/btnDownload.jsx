import React, { useState } from 'react';
import "./css/index.css"
function BtnDownload() {
    const [fileUrl, setFileUrl] = useState('');

    const handleClick = () => {
        // aquí puedes obtener la URL del archivo de una API o de alguna otra manera
        setFileUrl('RUTA DE DESCARGA.exe');
    }

    return (
        <a href={fileUrl} download>
            <button onClick={handleClick} className="btnyoutapp">Descargar</button>
        </a>
        
    );
}

export default BtnDownload;