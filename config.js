/*
 * @Author: ibeeger
 * @Date:   2016-11-18 11:37:52
 * @Last Modified by:   willclass
 * @Last Modified time: 2016-11-22 21:00:45
 */

'use strict';


var config = {
	local: {
		self: "http://c54abe15.ngrok.io",
		host: "172.16.10.46",
		port: 8104,
		appid: "wxf394e0b71f666b53",
		appsecret: "bf17284dfa414aa266ea1b34ff8d4763"
	},
	ibeeger: {
		self: "http://5ad205c3.ngrok.io",
		host: "172.16.10.46",
		port: 80,
		appid: "wx50adb3417b18a54b",
		appsecret: "c65dbc2e6bb0ccdf6e20b2343d32666b"
	},
	zhitiku: {
		self: "http://wechat.zhitku.cn",
		host: "web.market.zhitku.cn",
		port: 80,
		appid: "wx6771c1fd9df51b55",
		appsecret: "f9193cabf2dddeab6caf231742d022c8"
	},
	online: {
		self: "http://wechat.willclass.com",
		host: "web.market.willclass.com",
		port: 80,
		appid: "wx6771c1fd9df51b55",
		appsecret: "f9193cabf2dddeab6caf231742d022c8"
	},
	token: "weixin_ipooy"
}

var env = process.env.NODE_ENV || "local";

module.exports = {
	token: config.token,
	appid: config[env]["appid"],
	appsecret: config[env]["appsecret"],
	host: config[env]["host"],
	port: config[env]["port"],
	self: config[env]["self"]
}
