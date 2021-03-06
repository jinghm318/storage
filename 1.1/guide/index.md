## 综述

storage 是跨终端、跨域的存储组件：

0. 兼容 IE 6+；Chrome、Firefox、Safari
0. 不使用 Flash 方案，完美支持移动浏览器
0. 跨子域、主域的数据存取，且不会改写 document.domain
0. 支持 Object、Array 等复杂对象存取
0. 每天十亿级调用次数的考验，稳定可靠

更多信息

* [Demo](http://gallery.kissyui.com/storage/1.1/demo/index.html)
* [技术方案详解](https://github.com/luics/storage/wiki/Storage)
* 作者：鬼道

## 组件使用

> Kissy 1.3.0+ 无需此段代码

```javascript
KISSY.config({
    packages:[
        {
            name:"gallery",
            path:"http://a.tbcdn.cn/s/kissy/",
            charset:"utf-8"
        }
    ]
});
```

## API

### get/set

```javascript
S.use('gallery/storage/1.1/index', function (S, Storage) {

    var storage = new Storage();
    
    storage.set({k: 'key', v: 'value', success: function() {
        storage.get({k: 'key', success: function(data) {
            console.log('获取的值：', data);
        }});
    }});
});
```

0. `k` key
0. `v` value
0. `success` 回调，如遇超时等异常，参数`data`为`undefined`，详见[此处讨论](https://github.com/luics/storage/wiki/Storage#%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86)

### remove/clear

```javascript
S.use('gallery/storage/1.1/index', function (S, Storage) {  

    var storage = new Storage();
    
    // 删除数据'key' 
    storage.remove({k: 'key', success: function() {
    }});
    
    // 清空所有字段
    storage.clear({success: function() {
    }});
});
```

### 实例化

```javascript
S.use('gallery/storage/1.1/index', function (S, Storage) {
    
    var storage = new Storage({
        'proxy': 'tmall' 
    });
});
```

所有参数均为可选：

0. `prefix` key 前缀，详见下文“推荐命名”
0. `proxy` 数据存储在代理页所在的域，选择不同的代理页可以让数据存储在不同的域下
    0. `common`：(默认) http://a.tbcdn.cn/s/kissy/gallery/storage/1.1/proxy.html 
    0. `tmall`：http://www.tmall.com/go/act/stp-tm.php
    0. `taobao`：http://www.taobao.com/go/act/stp-tb.php
    0. `{proxy-url}`：[proxy 页面](http://a.tbcdn.cn/s/kissy/gallery/storage/1.1/proxy.html) 部署在特定域名下的 URL
0. `onload` 代理页加载成功的回调    

## 推荐命名

命名规则

* 推荐小骆驼（首字母小写其他词首大写），如`myFieldName`

防冲突机制

* 推荐类文件路径格式`xx/yy/zz`
* 阿里系较熟悉的 package name 可以直接作为前缀
* 没有 package 的场景下可以使用`应用/子应用/数据字段名`
    
## 存储上限

> 参见[此处讨论](https://github.com/luics/storage/wiki/Storage#%E5%AD%98%E5%82%A8%E4%B8%8A%E9%99%90)

如果希望独享存储空间，可以：

0. [代理页](http://a.tbcdn.cn/s/kissy/gallery/storage/1.1/proxy.html)部署至特定域
0. 实例化 Storage 设置代理页地址参数`proxy`

## 安全

> 参见[此处讨论](https://github.com/luics/storage/wiki/Storage#%E5%AE%89%E5%85%A8%E6%80%A7)

如果不希望存储的数据被第3方访问，可以：

0. 代理页部署至特定服务器、服务器端控制访问来源
0. 实例化 Storage 设置代理页地址参数`proxy`