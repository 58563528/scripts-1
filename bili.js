const axios = require('axios');
const cookie = process.env.BILIBILI_COOKIE; // 从环境变量中获取您的Bilibili Cookie值
​
async function bilibiliCheckin() {
    const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
    'Cookie': cookie,
    'Referer': 'https://www.bilibili.com/',
    'Origin': 'https://www.bilibili.com'
  }
    axios.get('https://api.live.bilibili.com/sign/doSign', { headers })
          .then(response => {
                console.log(response.data);
          })
  ;
  
}
​
​
async function getBilibiliSignInfo() {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
    'Cookie': cookie,
    'Referer': 'https://www.bilibili.com/',
    'Origin': 'https://www.bilibili.com'
  }
  
  const response = await axios.get('https://api.live.bilibili.com/sign/GetSignInfo', { headers });
  console.log(response.data.data)
  if (response.data.code === 0) {
    console.log(`本月已签到${response.data.data.signDaysList.length}天，连续签到${response.data.data.hadSignDays}天`);
  } else {
    console.error(`获取签到信息失败，错误信息：${response.data.message}`);
  }
}
bilibiliCheckin();
​
getBilibiliSignInfo();
​
​
​
​