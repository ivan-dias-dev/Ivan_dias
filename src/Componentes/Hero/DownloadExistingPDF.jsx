import Style from './index.module.css'
const DownloadExistingPDF = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv/Ivan Dias.pdf'; // Caminho relativo dentro da pasta public
    link.download = 'Curriculo-IvanDias.pdf'; // Nome do arquivo ao ser baixado
    link.click();
  };
  return (
    <button className={Style.cv} onClick={handleDownload}>
      CV
    </button>
  );
};

export default DownloadExistingPDF;
