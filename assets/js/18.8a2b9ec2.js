(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{189:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("BlogPostMeta"),s._v(" "),a("p"),s._m(1),a("p"),s._v(" "),s._m(2),s._v(" "),s._m(3),s._m(4),s._v(" "),s._m(5),s._m(6),s._v(" "),a("p",[s._v("依次配置三台服务器，注意替换节点名和节点地址")]),s._v(" "),s._m(7),s._m(8),s._v(" "),a("p",[s._v("由于es不能用root用户启动，所以我们新建一个用户")]),s._v(" "),s._m(9),s._m(10),s._v(" "),a("p",[s._v("编辑/etc/security/limits.conf,在最后面加上")]),s._v(" "),s._m(11),a("p",[s._v("编辑/etc/sysctl.conf，加上")]),s._v(" "),s._m(12),a("p",[s._v("执行命令")]),s._v(" "),s._m(13),s._m(14),s._v(" "),s._m(15),s._m(16),s._v(" "),s._m(17),s._m(18),s._v(" "),s._m(19),a("Valine")],1)},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"elasticsearch分布式集群搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch分布式集群搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" Elasticsearch分布式集群搭建")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#下载解压es"}},[s._v("下载解压ES")])]),a("li",[a("a",{attrs:{href:"#创建数据与日志目录"}},[s._v("创建数据与日志目录")])]),a("li",[a("a",{attrs:{href:"#配置elasticsearch-yml文件"}},[s._v("配置elasticsearch.yml文件")])]),a("li",[a("a",{attrs:{href:"#创建用户"}},[s._v("创建用户")])]),a("li",[a("a",{attrs:{href:"#配置用户权限"}},[s._v("配置用户权限")])]),a("li",[a("a",{attrs:{href:"#运行es"}},[s._v("运行es")])]),a("li",[a("a",{attrs:{href:"#停止"}},[s._v("停止")])]),a("li",[a("a",{attrs:{href:"#测试"}},[s._v("测试")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"下载解压es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载解压es","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载解压ES")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("wget")]),this._v(" https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.4.2.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("tar")]),this._v(" -zxvf elasticsearch-6.4.2.tar.gz\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"创建数据与日志目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建数据与日志目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建数据与日志目录")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@server-0005 elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir data")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@server-0005 elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir logs")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"配置elasticsearch-yml文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置elasticsearch-yml文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置elasticsearch.yml文件")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("cluster.name: es-cluster\nnode.name: node-1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 节点名")]),s._v("\npath.data: /data/elasticsearch/data\npath.logs: /data/elasticsearch/logs\nbootstrap.memory_lock: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nbootstrap.system_call_filter: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nnetwork.host: 192.168.0.195 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 节点地址")]),s._v("\nhttp.port: 9200\ndiscovery.zen.ping.unicast.hosts: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.195:9300"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.5:9300"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.55:9300"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndiscovery.zen.minimum_master_nodes: 2\ngateway.recover_after_nodes: 3\nnode.master: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nnode.data: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建用户")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@server-0005 bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# groupadd esgroup")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@server-0005 bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# useradd esroot -g esgroup -p espassword")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@server-0005 bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown -R esroot:esgroup /data/elasticsearch")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"配置用户权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置用户权限","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置用户权限")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("esroot hard nofile 65536\nesroot soft nofile 65536\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("vm.max_map_count"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("655360\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("sysctl -p\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"运行es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行es","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行es")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" esroot\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 是后台运行")]),s._v("\nbin/elasticsearch -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止","aria-hidden":"true"}},[this._v("#")]),this._v(" 停止")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("jps\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 查看端口然后kill掉")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 测试")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("curl")]),this._v(" -XGET "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'http://192.168.0.195:9200/_cat/nodes?pretty'")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])}],!1,null,null,null);n.options.__file="elasticsearch-ha.md";t.default=n.exports}}]);