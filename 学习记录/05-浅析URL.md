# 浅谈URL
**URL(Uniform Resource Locator)统一资源定位符，常用名: 网址。**

	 举个例子：http://www.ruanyifeng.com/blog/2020/04/bash-tutorial.html 
	 URL的格式：http://www.kxzq.com:80/dir/index.html?query=2#ch1
	           协议|服务器IP（域名）|端口号|文件路径|参数|锚点
			   不同的协议采用不通端口号，默认浏览器会带上端口号，
			   ftp 21 文件传输协议
			   ssh 22 SSH服务协议（安全登陆）
			   pop3 110 邮局协议
			   smtp 25 简单邮件传输协议
			   http 80 超文本传输协议
			   https 443 http + ssl （安全套接字）http的安全版
			   telnet 23  远程登陆

**DNS(Domain Name System), 它提供的是域名和IP之间的解析服务**

	 一个域名可以对应多个IP, 为的是减少请求压力，实现负载均衡
	 一个IP可以对应多个域名，服务器资源有限下的选择
	 nslookup命令用于查询DNS的记录，查看域名解析是否正常，在网络故障的时候用来诊断网络问题。
	 nslookup www.baidu.com  没指定dns-server，用系统默认的dns服务器。
	 nslookup www.baidu.com 114.114.114.114 （用指定的域名服务器来查询）

**IP(Internet Protocol)，它的作用是把各种数据包传送给对方。**

	 为确保数据的传输成功，需要IP地址，MAC（Media Access Control Address）局域网地址.
	 IP地址指定了节点地址，MAC地址是指网卡的固定地址。ip可以变换，但是MAC地址是唯一的。
	 IP间的通信依赖MAC地址。在设备中转过程中，使用ARP（Address Resolution Protocol）协议
	 根据通信方IP地址反查对应MAC地址。
	 ping命令是常用的网络命令，它通常用来测试与目标主机的连通性。
	 ping [参数] [主机名或IP地址]
	 例如：ping -a 192.168.102.1

**域名（Domain names）**

```
任何连上互联网的电脑都可以通过一个公共IP地址访问到，但是IP地址很难记忆而且可能会随着时间的推移发生改变,所以就有了绑定IP的域名.
域名的结构:英文字母组成, 用点进行分割多个部分,从右到左阅读.
最右边是（Top-Level Domain，顶级域名）,左边的都是从属关系的子域名.
例子: developer.mozilla.org
.gov的顶级域名只能被政府部门使用。
.edu只能为教育或研究机构使用。
.com 表示公司
.net 表示网络提供商的
.org适用于各类组织机构（包括非盈利团体）
以上为常见顶级域名
```



