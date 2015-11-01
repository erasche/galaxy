define(["utils/utils","galaxy.masthead","galaxy.menu","galaxy.frame","mvc/ui/ui-portlet","mvc/ui/ui-misc","mvc/ui/ui-modal","mvc/user/user-quotameter","mvc/app/app-login","mvc/app/app-analysis"],function(a,b,c,d,e,f,g,h,i,j){return Backbone.View.extend({initialize:function(e){this.options=a.merge(e,{}),this.setElement(this._template(e)),Galaxy.app=this,Galaxy.params=this.options.params,Galaxy.router=new Backbone.Router,$("body").append(this.$el),ensure_dd_helper();var f=$(this.$el.parent()).attr("scroll","no").addClass("full-content");this.options.message_box_visible&&(f.addClass("has-message-box"),this.$("#messagebox").show()),this.options.show_inactivity_warning&&(f.addClass("has-inactivity-box"),this.$("#inactivebox").show()),Galaxy.masthead||(Galaxy.masthead=new b.GalaxyMasthead(this.options),Galaxy.modal=new g.View,Galaxy.frame=new d.GalaxyFrame,Galaxy.menu=new c.GalaxyMenu({masthead:Galaxy.masthead,config:this.options}),Galaxy.quotaMeter=new h.UserQuotaMeter({model:Galaxy.user,el:Galaxy.masthead.$(".quota-meter-container")}).render()),this.build(Galaxy.config.require_login&&!Galaxy.user.id?i:j)},display:function(a,b){$(".select2-hidden-accessible").remove(),this.panels&&this.panels[b||"center"].display(a)},build:function(b){this.panels=[];var c=$.extend(!0,{},this.options),d=["center","left","right"];for(var e in d){var f=d[e];if(this.$("#"+f).remove(),b[f]){var g=this.panels[f]=new b[f](c);if("center"==f)this.$el.append($('<div id="'+f+'"/>').addClass("inbound").append(g.$el));else{var h=a.merge(g.components,{header:{title:"",cls:"",buttons:[]},body:{cls:""}}),i=$(this._templatePanel(f));i.find(".panel-header-text").html(h.header.title),i.find(".unified-panel-header-inner").addClass(h.header.cls);for(var e in h.header.buttons)i.find(".panel-header-buttons").append(h.header.buttons[e].$el);i.find(".unified-panel-body").addClass(h.body.cls).append(g.$el);{new Panel({center:this.$("#center"),panel:i,drag:i.find(".unified-panel-footer > .drag"),toggle:i.find(".unified-panel-footer > .panel-collapse"),right:"right"==f})}this.$el.append(i)}}else this.$("#center").css(f,"0")}},_templatePanel:function(a){return'<div id="'+a+'"><div class="unified-panel-header" unselectable="on"><div class="unified-panel-header-inner"><div class="panel-header-buttons" style="float: right"/><div class="panel-header-text"/></div></div><div class="unified-panel-body"/><div class="unified-panel-footer"><div class="panel-collapse '+a+'"/><div class="drag"/></div></div>'},_template:function(){return'<div id="everything" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"><div id="background"/><div id="messagebox" class="panel-'+Galaxy.config.message_box_class+'-message" style="display: none;">'+Galaxy.config.message_box_content+'</div><div id="inactivebox" class="panel-warning-message" style="display: none;">'+Galaxy.config.inactivity_box_content+' <a href="'+Galaxy.root+'user/resend_verification">Resend verification.</a></div></div>'}})});
//# sourceMappingURL=../../../maps/mvc/app/app-view.js.map