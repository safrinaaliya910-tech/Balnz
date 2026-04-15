const https = require('https');

const queries = [
  'senior balance exercise physiotherapy unsplash',
  'older adults fitness yoga unsplash',
  'senior physical therapy home exercise unsplash',
  'older adult fall prevention exercise unsplash'
];

let allIds = new Set();
let pending = queries.length;

queries.forEach(q => {
  const options = {
    hostname: 'www.bing.com',
    path: '/images/search?q=' + encodeURIComponent(q),
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' }
  };
  
  https.get(options, res => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => {
      const regex = /murl&quot;:&quot;(https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+)[^&]*&quot;/g;
      let match;
      while ((match = regex.exec(data)) !== null) {
        allIds.add(match[1]);
      }
      
      const regex2 = /murl":"(https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+)[^"]*"/g;
      while ((match = regex2.exec(data)) !== null) {
        allIds.add(match[1]);
      }

      pending--;
      if (pending === 0) {
        console.log(Array.from(allIds).join('\n'));
      }
    });
  });
});
