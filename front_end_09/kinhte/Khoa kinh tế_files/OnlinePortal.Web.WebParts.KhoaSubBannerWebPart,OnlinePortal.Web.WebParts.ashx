if(typeof OnlinePortal == "undefined") OnlinePortal={};
if(typeof OnlinePortal.Web == "undefined") OnlinePortal.Web={};
if(typeof OnlinePortal.Web.WebParts == "undefined") OnlinePortal.Web.WebParts={};
if(typeof OnlinePortal.Web.WebParts.KhoaSubBannerWebPart_class == "undefined") OnlinePortal.Web.WebParts.KhoaSubBannerWebPart_class={};
OnlinePortal.Web.WebParts.KhoaSubBannerWebPart_class = function() {};
Object.extend(OnlinePortal.Web.WebParts.KhoaSubBannerWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideSave: function(ORenderInfo, WebSitePageModuleId, ListDataId) {
		return this.invoke("ServerSideSave", {"ORenderInfo":ORenderInfo, "WebSitePageModuleId":WebSitePageModuleId, "ListDataId":ListDataId}, this.ServerSideSave.getArguments().slice(3));
	},
	url: '/ajaxpro/OnlinePortal.Web.WebParts.KhoaSubBannerWebPart,OnlinePortal.Web.WebParts.ashx'
}));
OnlinePortal.Web.WebParts.KhoaSubBannerWebPart = new OnlinePortal.Web.WebParts.KhoaSubBannerWebPart_class();

