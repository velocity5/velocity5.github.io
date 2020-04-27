if(typeof OnlinePortal == "undefined") OnlinePortal={};
if(typeof OnlinePortal.Web == "undefined") OnlinePortal.Web={};
if(typeof OnlinePortal.Web.WebParts == "undefined") OnlinePortal.Web.WebParts={};
if(typeof OnlinePortal.Web.WebParts.KhoaAliasPlainTextWebPart_class == "undefined") OnlinePortal.Web.WebParts.KhoaAliasPlainTextWebPart_class={};
OnlinePortal.Web.WebParts.KhoaAliasPlainTextWebPart_class = function() {};
Object.extend(OnlinePortal.Web.WebParts.KhoaAliasPlainTextWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideSave: function(ORenderInfo, WebSitePageModuleId, ListDataId, ListDataItemId) {
		return this.invoke("ServerSideSave", {"ORenderInfo":ORenderInfo, "WebSitePageModuleId":WebSitePageModuleId, "ListDataId":ListDataId, "ListDataItemId":ListDataItemId}, this.ServerSideSave.getArguments().slice(4));
	},
	ServerSideDrawListDataItem: function(ORenderInfo, WebSitePageModuleId, ListDataId, ListDataItemId) {
		return this.invoke("ServerSideDrawListDataItem", {"ORenderInfo":ORenderInfo, "WebSitePageModuleId":WebSitePageModuleId, "ListDataId":ListDataId, "ListDataItemId":ListDataItemId}, this.ServerSideDrawListDataItem.getArguments().slice(4));
	},
	url: '/ajaxpro/OnlinePortal.Web.WebParts.KhoaAliasPlainTextWebPart,OnlinePortal.Web.WebParts.ashx'
}));
OnlinePortal.Web.WebParts.KhoaAliasPlainTextWebPart = new OnlinePortal.Web.WebParts.KhoaAliasPlainTextWebPart_class();

