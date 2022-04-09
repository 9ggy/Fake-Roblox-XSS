# Fake Roblox XSS

Theres been this trend going around the beaming community lately; you go into beaming server, and sell some fake OP method to a newgen. 

Today im here to show you how easy it is to fake having one of the most popular methods to fake: One Click XSS 

# Example
<img src="https://user-images.githubusercontent.com/84878036/162590559-73765383-4f50-47ad-8f9f-6056e1f5176b.png" width=65%/>

*It's so easy its funny.*

# How to Set Up

 - first thing you are going to need to do is throw this on localhost, in my opinion that is the best place to show it off. I recommend downloading the "Live Server" extension in VSCode

 - While you are at that change the data in the config.json file to fit the person you are "beaming". You can get the avatar URL by replacing the {USERID} in this url:

`https://www.roblox.com/bust-thumbnail/image?userId={USERID}&width=420&height=420&format=png`

 - This will redirect you to the image url, now you copy that and paste it into the "userImage" value.

 - Now you can go to your localhost url; and as soon as you reach the page, the webhook will be sent!


# How it works

It's actually PAINFULLY simple. As soon as the page is reached we automatically run script.js. Script js comprises of two parts.

 - Reading data from config.json

 - Crafting the webhook body using the data read from config.json, and sending it

That's all it is.
