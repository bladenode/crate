var crateTag=document.currentScript,server=crateTag.getAttribute("server"),channel=(server=server.replace("|","/").split("/"))[1];server=server[0];var position={x:"right",y:"bottom"};null!=crateTag.getAttribute("left")&&(position.x="left"),null!=crateTag.getAttribute("top")&&(position.x="top");var options="0002";null!=crateTag.getAttribute("options")&&(options=crateTag.getAttribute("options"));var beta=!1;null!=crateTag.getAttribute("beta")&&(beta=!0);var buttons={};crateTag.getAttribute("button1")&&(buttons.primary=crateTag.getAttribute("button1")),crateTag.getAttribute("button2")&&(buttons.secondary=crateTag.getAttribute("button2"));var colors={};crateTag.getAttribute("color")&&(colors.toggle=crateTag.getAttribute("color")),crateTag.getAttribute("color1")&&(colors.background=crateTag.getAttribute("color1")),crateTag.getAttribute("color2")&&(colors.button=crateTag.getAttribute("color2"));var notifications={toasts:{}};crateTag.getAttribute("notoast")&&(notifications.toasts.enable=!1);var delay=!1;crateTag.getAttribute("delay")&&(delay=!0);var config={server:server,channel:channel,options:options,delay:delay,beta:beta,colors:colors,buttons:buttons,position:position,notifications:notifications};crateTag.getAttribute("logo")&&(config.logo=crateTag.getAttribute("logo")),crateTag.getAttribute("discord")&&(config.logo="discord"),crateTag.getAttribute("intercom")&&(config.logo="intercom");var crateUpgrader=document.createElement("script");crateUpgrader.src="https://crate.widgetbot.io/v2",document.body.appendChild(crateUpgrader),crateUpgrader.onload=function(){window.crate=new Crate(config)};