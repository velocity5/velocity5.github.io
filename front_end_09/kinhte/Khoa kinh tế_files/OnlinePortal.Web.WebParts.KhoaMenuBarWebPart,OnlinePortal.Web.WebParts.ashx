if(typeof OnlinePortal == "undefined") OnlinePortal={};
if(typeof OnlinePortal.Web == "undefined") OnlinePortal.Web={};
if(typeof OnlinePortal.Web.WebParts == "undefined") OnlinePortal.Web.WebParts={};
if(typeof OnlinePortal.Web.WebParts.KhoaMenuBarWebPart_class == "undefined") OnlinePortal.Web.WebParts.KhoaMenuBarWebPart_class={};
OnlinePortal.Web.WebParts.KhoaMenuBarWebPart_class = function() {};
Object.extend(OnlinePortal.Web.WebParts.KhoaMenuBarWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideSave: function(ORenderInfo, WebSitePageModuleId, ListDataId) {
		return this.invoke("ServerSideSave", {"ORenderInfo":ORenderInfo, "WebSitePageModuleId":WebSitePageModuleId, "ListDataId":ListDataId}, this.ServerSideSave.getArguments().slice(3));
	},
	url: '/ajaxpro/OnlinePortal.Web.WebParts.KhoaMenuBarWebPart,OnlinePortal.Web.WebParts.ashx'
}));
OnlinePortal.Web.WebParts.KhoaMenuBarWebPart = new OnlinePortal.Web.WebParts.KhoaMenuBarWebPart_class();

