"use strict";var code=$("#ip-whitelist").attr("data-code");request("/staff/ip/whitelist/"+code,"POST").then(function(){success("Your device has been whitelisted. Please continue.",function(){window.location.href="/"})})["catch"](function(){warning("It looks like this URL is expired or invalid.",function(){window.location.href="/"})});