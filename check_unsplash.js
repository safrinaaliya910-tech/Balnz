const https = require('https');
const ids = [
  'photo-1576091160399-112ba8d25d1d', 'photo-1563298723-dcfebaa392e3', 'photo-1543353071-873f17a7a088',
  'photo-1517436073-3b1b1b465365', 'photo-1514995669114-6081e934b693', 'photo-1534438327276-14e5300c3a48',
  'photo-1571019613454-1cb2f99b2d8b', 'photo-1518459031867-a89b944bffe4', 'photo-1521737711867-e3b97375f902',
  'photo-1490645935967-10de6ba17061', 'photo-1576091160550-2173dba999ef', 'photo-1544367567-0f2fcb009e0b',
  'photo-1599058917212-d750089bc07e', 'photo-1559839734-2b71ea197ec2', 'photo-1472099645785-5658abf4ff4e',
  'photo-1438761681033-6461ffad8d80', 'photo-1507003211169-0a1dd7228f2d', 'photo-1518611012118-696072aa579a',
  'photo-1538805060514-97d9cc17730c', 'photo-1574680096145-d05b474e2155', 'photo-1552508744-1696d4464960',
  'photo-1574680178050-55c6f6997ea6', 'photo-1574680088814-c9e8a10d8a4d', 'photo-1583454110551-21f2fa2afe61',
  'photo-1556817411-31ae72fa3ea0', 'photo-1506126613408-eca07ce68773', 'photo-1552674605-db6ffd4facb5',
  'photo-1571019614242-c5c5dee9f50b', 'photo-1518310383802-640c2de311b2', 'photo-1522844990619-a4175371adcc',
  'photo-1517836357463-d25dfeac3438', 'photo-1502086223501-7ea6ecd79368', 'photo-1513593771513-7b58b6c4af38',
  'photo-1541534741688-6078c6bfb5c5', 'photo-1548690312-e3b507d8c110', 'photo-1542156822-6924d1a71ace',
  'photo-1550345332-09e3ac987658', 'photo-1552674605-db6ffd4facb6', 'photo-1517130038641-a774d04afb3c'
];

let valid = [];
let pending = ids.length;
ids.forEach(id => {
  https.request({method: 'HEAD', hostname: 'images.unsplash.com', path: '/' + id}, res => {
    if (res.statusCode === 200 || res.statusCode === 302) valid.push(id);
    pending--;
    if (pending === 0) console.log(valid.join('\n'));
  }).end();
});
