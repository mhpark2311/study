// 예제 1. 비속어 필터링 (포함되지 않은 단어만 통과)
const blacklist = ['bad', 'ugly', 'evil'];
const word = 'kind';
if (!blacklist.includes(word)) {
  console.log('허용된 단어입니다.');
}

// 예제 2. 허용된 확장자가 아닌 경우 경고
const allowedExtensions = ['jpg', 'png', 'gif'];
const uploadedFile = 'document.pdf';
if (!allowedExtensions.includes(uploadedFile.split('.').pop())) {
  console.log('허용되지 않은 파일 형식입니다.');
}
