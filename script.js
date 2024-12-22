
// 图片链接数组
const imageUrls = [
  "https://pic1.zhimg.com/v2-0acbf7a2d0b3b9a819b9b5cde8d4a4f1.jpg", // 示例图片1
  "https://pic3.zhimg.com/v2-d234233bcb03e5cf1f241f5e5c8016a4.jpg", // 示例图片2
  "https://pic2.zhimg.com/v2-0e0c63cb431f4d207c8f8f3d1298b4a1.jpg", // 示例图片3
];

// 随机选择图片
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

// 页面加载时，先加载并显示随机图片
window.onload = function() {
  // 获取随机图片
  const randomImageUrl = getRandomImage();
  document.getElementById('random-image').src = randomImageUrl;

  // 图片加载完成后弹出对话框
  document.getElementById('random-image').onload = function() {
    // 图片加载完成后，显示弹窗
    setTimeout(function() {
      document.getElementById('popup').style.display = 'block';
    }, 500);
  };

  // 处理图片加载错误的情况
  document.getElementById('random-image').onerror = function() {
    // 如果图片加载失败，显示“忽略图片加载”按钮并弹出对话框
    document.getElementById('popup').style.display = 'block';
  };
};

// 用户点击“我已满18岁 进入”按钮，跳转到指定视频链接
function enterSite() {
  window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=YAEo54UEQ5TQom_O";
}

// 用户点击“我未满18岁 退出此页面”按钮，跳转到指定页面
function exitSite() {
  window.location.href = "https://my.4399.com/game/";
}

// 用户点击“忽略图片加载”按钮，直接跳转到对话框
function skipImageLoad() {
  document.getElementById('popup').style.display = 'block';
}
