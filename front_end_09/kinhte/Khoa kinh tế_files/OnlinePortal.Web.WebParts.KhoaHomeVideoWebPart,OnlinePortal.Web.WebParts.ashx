if(typeof OnlinePortal == "undefined") OnlinePortal={};
if(typeof OnlinePortal.Web == "undefined") OnlinePortal.Web={};
if(typeof OnlinePortal.Web.WebParts == "undefined") OnlinePortal.Web.WebParts={};
if(typeof OnlinePortal.Web.WebParts.KhoaHomeVideoWebPart_class == "undefined") OnlinePortal.Web.WebParts.KhoaHomeVideoWebPart_class={};
OnlinePortal.Web.WebParts.KhoaHomeVideoWebPart_class = function() {};
Object.extend(OnlinePortal.Web.WebParts.KhoaHomeVideoWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideSave: function(ORenderInfo, WebSitePageModuleId, ListDataId) {
		return this.invoke("ServerSideSave", {"ORenderInfo":ORenderInfo, "WebSitePageModuleId":WebSitePageModuleId, "ListDataId":ListDataId}, this.ServerSideSave.getArguments().slice(3));
	},
	url: '/ajaxpro/OnlinePortal.Web.WebParts.KhoaHomeVideoWebPart,OnlinePortal.Web.WebParts.ashx'
}));
OnlinePortal.Web.WebParts.KhoaHomeVideoWebPart = new OnlinePortal.Web.WebParts.KhoaHomeVideoWebPart_class();

