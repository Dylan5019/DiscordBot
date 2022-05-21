const Canvas = require(`canvas`);
const Discord = require(`discord.js`);



//const background = "https://i.imgur.com/zvWTUVu.jpg"
const background = "https://wallpaperaccess.com/full/5927911.gif"

//Canvas Dimensions - Size of Background
const dim = {
    height: 675,
    width: 1200,
    margin: 50
}

//Avatar Dimensions
const av = {
    size: 256,
    x: 480,
    y: 170
}

const generateImage = async (member) => {
  let username = member.user.username;
  let discrim = member.user.discriminator;
  let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: "false", size: av.size});

  // Create Canvas with height and width of background image
  const canvas = Canvas.createCanvas(dim.width, dim.height);
  const ctx = canvas.getContext("2d");

  // Draw in the Background Image using Canvas LoadImage
  const backImg = await Canvas.loadImage(background);
  ctx.drawImage(backImg, 0, 0);

  // Black Tinted Box to Help Readability
  ctx.fillStyle = "rgba(0,0,0,0.8)";
  ctx.fillRect(dim.margin, dim.margin, dim.width- 2 * dim.margin, dim.height - 2 * dim.margin);

  // Draw in the Avatar Image
  const avimg = await Canvas.loadImage(avatarURL);
  ctx.save();
  
  //Draw in Circle and then Select it
  ctx.beginPath();
  //.arc(x Size, Y Size, Radius, Start Angle, End Angle, CounterClockwise(T/F))
  ctx.arc(av.x + av.size / 2, av.y + av.size /2, av.size / 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(avimg, av.x, av.y);
  ctx.restore();

  //Write in Text
  ctx.fillStyle = "White";
  ctx.textAlign = "center";

  //Draw in Welcome
  ctx.font = "50px Roboto";
  ctx.fillText("Welcome", dim.width/2, dim.margin + 70);

  //Draw in Username
  ctx.font = "60px Roboto";
  ctx.fillText(username + "#"+ discrim, dim.width/2, dim.height - dim.margin -125);

  // Draw in to the server
  ctx.font = "40px Roboto";
  ctx.fillText("to the server", dim.width/2, dim.height - dim.margin - 50);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "Welcome.png");
  return attachment;


}

module.exports = generateImage;