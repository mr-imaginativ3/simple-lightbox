"undefined"!=typeof jQuery&&"undefined"!=typeof SLB&&SLB.View&&SLB.View.extend_template_tag_handler&&!function($){$(document).ready(function(){SLB.View.extend_template_tag_handler("ui",{_hooks:function(){this.on("viewer-init",function(ev){this.call_attribute("viewer_init",ev)})},viewer_init:function(ev){var v=ev.viewer;v.on("events-complete",function(ev,v){var close=function(){return v.close()};v.get_theme().dom_get_tag("ui","close").click(close);var nav_next=function(){v.item_next()},nav_prev=function(){v.item_prev()};v.get_theme().dom_get_tag("ui","nav_next").click(nav_next),v.get_theme().dom_get_tag("ui","nav_prev").click(nav_prev);var slideshow_control=function(){v.slideshow_toggle()};v.get_theme().dom_get_tag("ui","slideshow_control").click(slideshow_control)}),v.on("slideshow-toggle",function(ev,v){var tags=v.get_theme().get_tags("ui","slideshow_control"),render_tag=function(tag){tag.render(v.get_item()).done(function(r){r.tag.dom_get().html(r.output)})};if(tags.length)for(var x=0;x<tags.length;x++)render_tag(tags[x])})},render:function(item,tag,dfr){var ret=this.handle_prop(tag.get_prop(),item,tag);return this.util.is_promise(ret)?ret.done(function(output){dfr.resolve(output)}):dfr.resolve(ret),dfr.promise()},props:{slideshow_control:function(item){var prop=item.get_viewer().slideshow_active()?"slideshow_stop":"slideshow_start";return item.get_viewer().get_label(prop)},group_status:function(item){if(item.get_group().is_single())return"";var key,ph,out=item.get_viewer().get_label("group_status"),delim="%",handlers={current:function(){return item.get_group(!0).get_pos()+1},total:function(){return item.get_group().get_size()}};for(key in handlers)ph=delim+key+delim,-1!==out.indexOf(ph)&&(out=out.replace(ph,handlers[key]()));return out}}})})}(jQuery);