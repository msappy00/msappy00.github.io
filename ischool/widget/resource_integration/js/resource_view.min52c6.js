function getScreen(b,e){if(b===null)return"";var e=e===null?"big":e,h,b=b.substr(b.lastIndexOf("/")+1,b.length);h=b.match("[\\?&]v=([^&#]*)");h=h===null?b:h[1];return e=="small"?"http://img.youtube.com/vi/"+h+"/2.jpg":"http://img.youtube.com/vi/"+h+"/0.jpg"}function size_format(b){for(var e=0;b>=1024;)b/=1024,++e;return b.toFixed(1)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}function xxgotoPage(b,e){alert(b+", "+e);content_query_field(b,e)}
function get_nav_div(b,e,h,d){var b="",a="goto first page",f="goto prev page",s="goto next page",n="goto latest page",o="goto page ";if(d!=null)a=d.goto_first_page,f=d.goto_prev_page,s=d.goto_next_page,n=d.goto_latest_page,o=d.goto_page;b+="<div class='navDiv'>";e>0?(b+="<a class='tab-ctl-x nav-ctl-x' data-page-num='0' title='"+a+"'>|&lt;</a>",b+="<a class='tab-ctl-x nav-ctl-x' data-page-num='"+(e-1)+"' title='"+f+"'>&lt;&lt;</a>"):b+="<span class='disable'>|&lt;</span><span class='disable'>&lt;&lt;</span>";
d=!1;for(a=0;a<h;a++)a==e?(b+="<span class='select'>"+(a+1)+"</span>",d=!1):Math.abs(a-e)>2&&a!=h-1&&a!=0&&h>10?d==!1&&(b+="<span>...</span>",d=!0):b+="<a class='tab-ctl-x nav-ctl-x' data-page-num='"+a+"' title='"+o+(a+1)+"'>"+(a+1)+"</a>";e<h-1?(b+="<a class='tab-ctl-x nav-ctl-x' data-page-num='"+(e+1)+"' title='"+s+"'>&gt;&gt;</a>",b+="<a class='tab-ctl-x nav-ctl-x' data-page-num='"+(h-1)+"' title='"+n+"'>&gt;|</a>"):b+="<span class='disable'>&gt;&gt;</span><span class='disable'>&gt;&gt;|</span>";
b+="</div>";return b}function is_accepted_column(b){return b=="name"||b=="owner"||b=="time"||b=="ext"||b=="size"||b=="hits"||b=="download"?!0:!1}
function getColTitle(b){if(!is_accepted_column(b))return"\u672a\u77e5";if(b=="name")return"\u540d\u7a31";else if(b=="owner")return"\u4e0a\u50b3\u8005";else if(b=="ext")return"\u985e\u578b";else if(b=="size")return"\u6a94\u6848\u5927\u5c0f";else if(b=="hits")return"\u9ede\u64ca\u6b21\u6578";else if(b=="time")return"\u65e5\u671f\u6642\u9593";else if(b=="download")return"\u4e0b\u8f09"}
function build_resource_view(b,e,h,d,a,f,s,n,o,v,w){b.empty();a==""&&(a="name,ext,size,hits");var k=a.split(","),a="",y=parseInt(f[0].pageNum);parseInt(f[0].queryCount);var z=Math.max(parseInt(f[0].totalPages),1),r=parseInt(f[0].parentAlbumId);if(e){a+='<table id="atb" width="100%" border="0" align="center" cellpadding="5" cellspacing="1" style="table-layout:fixed">';a+="<thead>";a+="<tr>";for(var g=0;g<k.length;g++){var e=!1,c=k[g];is_accepted_column(c)&&(a+='<th scope="col" id="'+c+'" hid="'+c+
'"',c=="owner"?a+=' style="width:80px"':c=="ext"?(a+=' style="width:60px;cursor:pointer"',a+=' class="sortable tab-ctl-x"',e=!0):c=="size"?(a+=' style="width:100px;cursor:pointer"',a+=' class="sortable tab-ctl-x"',e=!0):c=="hits"?(a+=' style="width:80px;cursor:pointer"',a+=' class="sortable tab-ctl-x"',e=!0):c=="name"?(a+=' style="cursor:pointer"',a+=' class="sortable tab-ctl-x"',e=!0):c=="time"?a+=' style="width:100px"':c=="download"&&(a+=' style="width:60px"'),a+=' title="'+getColTitle(c),e&&(a+=
"(\u9ede\u64ca\u6392\u5e8f)"),a+='"',a+=">",a+=getColTitle(c),a+="</th>")}a+="</tr>";a+="</thead>";var j=0;r!=-2&&h!=d&&(a+='<tr class="tcontent odd">',a+='<td style="width:55%;text-align:left;" order="DESC" field="name" colspan="'+k.length+'">',a+='<a id="albumfolder" class="tab-ctl-x list_folder" style="cursor:pointer" aid="'+r+'">\u56de\u4e0a\u4e00\u9801</a>',a+="</td>",j++);for(d=1;d<f.length;d++){var e=f[d].id,q=f[d].title,l=f[d].url,m=f[d].permission,x=parseInt(f[d].size),p=f[d].type,t=parseInt(f[d].hits),
i=p,u=f[d].owner,A=f[d].date==null?"":f[d].date;a+=j%2==0?'<tr class="tcontent odd">':'<tr class="tcontent even">';if(p=="folder")for(g=0;g<k.length;g++)c=k[g],is_accepted_column(c)&&(c=="name"?(a+='<td style="text-align:left;" order="DESC" field="name" headers="name">',a+='<a id="albumfolder" class="list_folder tab-ctl-x',r==-2?(a+=" list_cat",m==1&&(a+=" list_cat_lock")):m==1&&(a+=" list_folder_lock"),a+='"',a+=' style="cursor:pointer;width:auto" file="'+l+'" permission="'+m+'" aid="'+l+'">'+q+
"</a>",a+="</td>"):c=="owner"?a+='<td style="text-align:center;" order="DESC" field="owner" headers="owner">'+u+"</td>":c=="ext"?a+='<td style="text-align:center;" order="DESC" field="ext" headers="ext">-</td>':c=="size"?a+='<td style="text-align:center;" order="DESC" field="size" headers="size">-</td>':c=="hits"?a+='<td style="text-align:center;" order="DESC" field="hits" headers="hits">-</td>':c=="time"?a+='<td style="text-align:center;" order="DESC" field="time" headers="time">'+A+"</td>":c=="download"&&
(a+='<td style="text-align:center;" order="DESC" field="download" headers="ext">-</td>'));else for(g=0;g<k.length;g++)c=k[g],is_accepted_column(c)&&(c=="name"?(a+='<td style="text-align:left;" order="DESC" field="name" headers="name">',a+='<a id="albumfile" class="list_file tab-ctl-x',m==1&&(a+=" lock_icon"),a+='"',a+=' style="cursor:pointer" resource_id="'+e+'"',a+=' file="'+l+'"',a+=i!=""&&i!="url"&&i!="youtube"?' title="\u53e6\u958b\u65b0\u8996\u7a97\uff0c\u4e0b\u8f09'+q+'\u6a94\u6848"':' title="'+
q+'"',a+=' permission="'+m+'">'+q+"</a>",a+="</td>"):c=="owner"?a+='<td style="text-align:center;" order="DESC" field="owner" headers="owner">'+u+"</td>":c=="ext"?a+='<td style="text-align:center;" order="DESC" field="ext" headers="ext">'+p+"</td>":c=="size"?a+=p=="youtube"||p=="url"?'<td style="text-align:center;" order="DESC" field="size" headers="size">-</td>':'<td style="text-align:center;" order="DESC" field="size" headers="size">'+size_format(x)+"</td>":c=="hits"?a+='<td style="text-align:center;" order="DESC" field="hits" headers="hits">'+
t+"</td>":c=="time"?a+='<td style="text-align:center;" order="DESC" field="time" headers="time">'+A+"</td>":c=="download"&&(a+='<td style="text-align:center;" order="DESC" field="download" headers="download">',a+='<a id="albumfile" class="list_file tab-ctl-x',m==1&&(a+=" lock_icon"),a+='"',a+=' style="cursor:pointer" resource_id="'+e+'"',a+=' file="'+l+'"',a+=i!=""&&i!="url"&&i!="youtube"?' title="\u53e6\u958b\u65b0\u8996\u7a97\uff0c\u4e0b\u8f09'+q+'\u6a94\u6848"':' title="'+q+'"',a+=' permission="'+
m+'">\u4e0b\u8f09</a>',a+="</td>"));a+="</tr>";j++}a+="</table>";a+=get_nav_div(h,y,z,s);$(a).appendTo(b);$("a.list_file").click(function(){o&&o($(this))});$("a.list_file").keyup(function(a){a.which==13&&o&&o($(this))});$("a.list_folder").click(function(){n&&n($(this))});$("a.list_folder").keyup(function(a){a.which==13&&n&&n($(this))});$("#atb thead tr th.sortable").click(function(){v&&v($(this));return!1});$("#atb thead tr th.sortable").keyup(function(a){a.which==13&&v&&v($(this));return!1})}else{a+=
'<table id="thumb-atb-content" width="100%" border="0" align="center" cellpadding="4" cellspacing="0">';a+="<tr>";a+="<td>";a+='<div class="albums_content">';r!=-2&&h!=d&&(a+='<div class="albumDiv">',a+='<div class="picDiv">',a+='<div class="parentDiv tab-ctl-x" aid="'+r+'">',a+="</div>",a+="</div>",a+='<div id="albumtitle">\u56de\u4e0a\u4e00\u5c64</div>',a+="</div>");for(d=1;d<f.length;d++)e=f[d].id,q=f[d].title,l=f[d].url,m=f[d].permission,x=parseInt(f[d].size),p=f[d].type,t=parseInt(f[d].hits),
i=p,j="",a+='<div class="albumDiv">',p=="folder"?(a+='<div class="picDiv" style="overflow:hidden">',a+='<div class="folderDiv tab-ctl-x',r==-2&&(a+=" catDiv"),a+='"',a+=' aid="'+l+'"></div>'):p=="youtube"?(a+='<div class="picDiv" style="overflow:hidden">',imgUrl_small=getScreen(l,"small"),a+='<img class="fileDiv tab-ctl-x" src="',a+=imgUrl_small+'" resource_id="'+e+'" file="'+l+'" permission="'+m+'"',a+="/>"):i=="jpg"||i=="jpeg"||i=="png"||i=="gif"?(t=parseInt($(this).find("ap_width").text()),u=parseInt($(this).find("ap_height").text()),
c=c=g=j=k=100,g=c*(t/u),i="",g<k?(g=k,c=g*(u/t),i="margin-top:"+(j-c)/2+"px;"):i="margin-left:"+(k-g)/2+"px;",j="width:"+g+"px;",j+="height:"+c+"px;",j+=i,a+='<div class="picDiv shadow" style="overflow:hidden">',a+='<img class="fileDiv tab-ctl-x" src="../../public/resource_view/thumb.php?file=',a+=l+'" resource_id="'+e+'" file="'+l+'" permission="'+m+'" ',a+='style="'+j+'"/>'):(j=k=100,c=g=80,j="margin-top:"+(j-c)/2+"px;",j+="margin-left:"+(k-g)/2+"px;",a+='<div class="picDiv" style="overflow:hidden">',
a+='<div class="fileDiv tab-ctl-x" id="'+i+'" aid="'+e+'" resource_id="'+e+'" file="'+l+'" permission="'+m+'"',a+=' style="'+j+'">',a+="</div>"),m==1&&(a+='<div class="lockDiv"></div>'),a+="</div>",a+='<div class="albuminfo" style="font-size:80%">',a+='<div id="albumtitle" file="'+l+'" title="'+q+'">'+q+"</div>",p=="folder"&&(a+='<span class="smalltext">\u5171 '+x+" \u500b\u6a94\u6848</span>"),a+="</div>",a+="</div>";a+="</div>";a+=get_nav_div(h,y,z,s);a+="</td>";a+="</tr>";a+="</table>";$(a).appendTo(b);
$(".folderDiv, .parentDiv").click(function(){n&&n($(this))});$(".folderDiv, .parentDiv").keyup(function(a){a.which==13&&n&&n($(this))});$(".fileDiv").click(function(){o&&o($(this))});$(".fileDiv").keyup(function(a){a.which==13&&o&&o($(this))})}$("a.nav-ctl-x").click(function(){w&&w($(this));return!1});$("a.nav-ctl-x").keyup(function(a){a.which==13&&w&&w($(this))})};