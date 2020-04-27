if(typeof OnlinePortal == "undefined") OnlinePortal={};
if(typeof OnlinePortal.Web == "undefined") OnlinePortal.Web={};
if(typeof OnlinePortal.Web.FrontWebScreenRender_class == "undefined") OnlinePortal.Web.FrontWebScreenRender_class={};
OnlinePortal.Web.FrontWebScreenRender_class = function() {};
Object.extend(OnlinePortal.Web.FrontWebScreenRender_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideCreateRenderInfoObject: function() {
		return this.invoke("ServerSideCreateRenderInfoObject", {}, this.ServerSideCreateRenderInfoObject.getArguments().slice(0));
	},
	url: '/ajaxpro/OnlinePortal.Web.FrontWebScreenRender,OnlinePortal.Web.ashx'
}));
OnlinePortal.Web.FrontWebScreenRender = new OnlinePortal.Web.FrontWebScreenRender_class();

