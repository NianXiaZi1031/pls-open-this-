
// 图片链接数组
const imageUrls = [
 “https://tse1.mm.bing.net/th?id=OIP.z0mjyeb3VOT92xqtVV5ArAHaKt&pid=Api” , // 示例图片1
 “https://tse4.mm.bing.net/th?id=OIP.Sy9QLDzu5UPAGZIG-CXVLQHaLH&pid=Api” , // 示例图片2
 “https://tse2.mm.bing.net/th?id=OIP.XScpf2ho3BZOp_AWzlHSbAHaJz&pid=Api” , // 示例图片3
 “https://tse3.mm.bing.net/th?id=OIP.WQLW5vKtfo7b8WZ-569yxwHaMA&pid=Api” , // 示例图片4
 “https://tse2.mm.bing.net/th?id=OIP.q_D0fmvaefQgtUFryO2JBwHaNK&pid=Api” , // 示例图片5
 “https://tse3.mm.bing.net/th?id=OIP.qaA2hwLXGy_EkgrLkGRquAHaMG&pid=Api” , // 示例图片6
 “https://tse1.mm.bing.net/th?id=OIP.eCv2ze6WrlGBqLqA0y6eLwHaSw&pid=Api” , // 示例图片7
 “https://tse1.mm.bing.net/th?id=OIP.iQ9vn9A2cKtvBEZZAoDiWgHaEK&pid=Api” , // 示例图片8
 “https://tse1.mm.bing.net/th?id=OIP.gDFdCHSZdI7j0-HvkbgnDQHaKe&pid=Api” , // 示例图片9
 “https://tse3.mm.bing.net/th?id=OIP.ohBAqytaQee9GXFBbDvysgHaFj&pid=Api” , // 示例图片10
 
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
  window.location.href = "https://youtu.be/uHgt8giw1LY?feature=shared";
}

// 用户点击“我未满18岁 退出此页面”按钮，跳转到指定页面
function exitSite() {
  window.location.href = "https://my.4399.com/game/";
}

// 用户点击“忽略图片加载”按钮，直接跳转到对话框
function skipImageLoad() {
  document.getElementById('popup').style.display = 'block';
}
