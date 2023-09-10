import React, { useState } from "react";

const FileTest: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      // Thực hiện request đến API để lấy dữ liệu dưới dạng Blob
      const response = await fetch("URL_API_CUA_BAN");
      const blob = await response.blob();

      // Tạo đường dẫn tạm thời cho Blob
      const blobUrl = URL.createObjectURL(blob);

      // Cập nhật trạng thái để hiển thị liên kết tải xuống
      setFileUrl(blobUrl);

      // Tự động kích hoạt nút tải xuống
      const downloadButton = document.getElementById("download-button");
      if (downloadButton) {
        downloadButton.click();
      }
    } catch (error) {
      console.error("Lỗi khi tải file: ", error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Tải Xuống</button>
      {fileUrl && (
        <a
          id="download-button"
          href={fileUrl}
          //   download="ten_file.pdf"
          //   style={{ display: "none" }}
        >
          Tải Xuống
        </a>
      )}
    </div>
  );
};

export default FileTest;
