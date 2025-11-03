/**
 * 大文件上传和断点续传的实现，通常采用分片上传的方式。
 * 主要步骤包括：文件分片、计算文件哈希（用于标识文件）、上传分片、记录上传进度、断点续传（上传前检查已上传的分片）、分片合并等。
 * 
 * 以下是一个详细的前端实现方案：
 * 1、文件选择：使用input标签选择文件。
 * 2、文件分片：将文件切割成多个小块，例如每片2MB。
 * 3、计算文件哈希：使用SparkMD5等库计算文件的MD5，用于唯一标识文件，以便断点续传。
 * 4、检查已上传分片：在上传前，向服务器发送一个请求，检查该文件已经上传了哪些分片。
 * 5、上传分片：将未上传的分片依次上传，上传时带上分片索引、文件哈希等信息。
 * 6、分片合并：当所有分片上传完成后，通知服务器进行分片合并。

 * 实际应用中需要处理错误重试、上传进度显示、并发控制等问题。
 * 另外，为了用户体验，可以添加进度条显示上传进度。在上传每个分片后，更新进度。
 * 进度计算：已上传的分片数 / 总分片数 * 100。
 * 同时，为了支持暂停和续传，
 * - 我们可以将上传的分片信息（如fileHash、已上传的分片索引）保存到本地存储（localStorage），
 * - 这样即使页面刷新，也可以从断点继续上传。
 */


// 引入SparkMD5库，用于计算文件哈希，可以通过CDN引入
// <script src="https://cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.2/spark-md5.min.js"></script>


{/* <input type="file" id="fileInput">
<button onclick="upload()">上传</button> */}

async function upload() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (!file) {
    alert('请选择文件');
    return;
  }

  // 分片大小，例如2MB
  const chunkSize = 2 * 1024 * 1024;
  const totalChunks = Math.ceil(file.size / chunkSize);
  const fileHash = await calculateFileHash(file, chunkSize);

  // 检查已上传的分片
  const uploadedChunks = await checkUploadedChunks(fileHash);

  // 上传分片
  for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
    // 如果该分片已经上传，则跳过
    if (uploadedChunks.includes(chunkIndex)) {
      console.log(`分片 ${chunkIndex} 已上传，跳过`);
      continue;
    }

    const chunk = file.slice(chunkIndex * chunkSize, (chunkIndex + 1) * chunkSize);
    const formData = new FormData();
    formData.append('file', chunk);
    formData.append('chunkIndex', chunkIndex);
    formData.append('totalChunks', totalChunks);
    formData.append('fileHash', fileHash);
    formData.append('filename', file.name);

    try {
      await uploadChunk(formData);
      console.log(`分片 ${chunkIndex} 上传成功`);
    } catch (error) {
      console.error(`分片 ${chunkIndex} 上传失败:`, error);
      // 可以选择重试机制
      return;
    }
  }

  // 所有分片上传完成，通知合并
  await mergeChunks(fileHash, file.name);
  console.log('文件上传完成');
}

// 计算文件哈希（使用SparkMD5）
function calculateFileHash(file, chunkSize) {
  return new Promise((resolve, reject) => {
    const chunks = Math.ceil(file.size / chunkSize);
    const spark = new SparkMD5.ArrayBuffer();
    const fileReader = new FileReader();

    let currentChunk = 0;

    fileReader.onload = function (e) {
      spark.append(e.target.result);
      currentChunk++;

      if (currentChunk < chunks) {
        loadNext();
      } else {
        resolve(spark.end());
      }
    };

    fileReader.onerror = reject;

    function loadNext() {
      const start = currentChunk * chunkSize;
      const end = start + chunkSize >= file.size ? file.size : start + chunkSize;
      fileReader.readAsArrayBuffer(file.slice(start, end));
    }

    loadNext();
  });
}

// 检查已上传的分片
async function checkUploadedChunks(fileHash) {
  const response = await fetch(`/check?fileHash=${fileHash}`);
  const data = await response.json();
  return data.uploadedChunks || [];
}

// 上传分片
async function uploadChunk(formData) {
  await fetch('/upload', {
    method: 'POST',
    body: formData,
  });
}

// 合并分片
async function mergeChunks(fileHash, filename) {
  await fetch('/merge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileHash,
      filename,
    }),
  });
}