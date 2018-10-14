var events={
  __event:{},
  emit(fncName,fncParams){
    this.__event[fncName](fncParams)
  },
  listener(fncName,fncParams){
    this.__event[fncName]=fncParams
  },
}
export default{
  ws:{},
  init(domain,listener) {//,overMsg
    events.listener(listener[0],listener[1])
    for(var i in listener){
      events.listener(i,listener[i])
    }
    events.listener('link-close',()=>{
      this.ws = new WebSocket("ws://" + domain + ":7272");
      this.connect()
    })
  /*  setTimeout(()=>{
      this.ws.close()
    },5000)*/
    // events.listener(overMsg[0],overMsg[1])
    this.ws = new WebSocket("ws://" + domain + ":7272");
    this.connect()
    return {
      ws:this,
      event:events
    }
  },

  connect() {

    this.ws.onopen = this.onopen;
    this.ws.onmessage = this.onmessage;
    this.ws.onclose = this.onclose;
    this.ws.onerror = this.onerror;

  },

  onerror(e) {
    console.log(this)
    console.log("出现错误", e);
  },

  onclose() {
    console.log("连接关闭，定时重连");
    console.log("1222223344555")
    events.emit('link-close')
  },

  onopen() {
   /* var login_data = JSON.stringify(json);
    console.log("websocket握手成功，发送登录数据:" + login_data);*/
   // this.send(login_data);
   console.log("1111",this)
   console.log("1")
    events.emit('link-ok',"ok")
  },
  send(data){
    this.ws.send(JSON.stringify(data))
  },
  onmessage(e) {
    var data=JSON.parse(e.data)
    events.emit('link-on-msg',data)
   // console.log(data)
   /* data = eval("(" + e.data.msg + ")");
    console.log(data);*/
    // events.emit('over-msg',data)
  },
}

/*
* function connect() {
       // 创建websocket
       ws = new WebSocket("ws://"+document.domain+":7273");
       // 当socket连接打开时，输入用户名
       ws.onopen = onopen;
       // 当有消息时根据消息类型显示不同信息
       ws.onmessage = onmessage;
       ws.onclose = function() {
    	  console.log("连接关闭，定时重连");
          connect();
       };
       ws.onerror = function() {
     	  console.log("出现错误");
       };
    }

    // 连接建立时发送登录信息
    function onopen()
    {
        if(!name)
        {
            show_prompt();
        }
        // 登录
        var login_data = '{"type":"login","client_name":"'+name.replace(/"/g, '\\"')+'","room_id":"1"}';
        console.log("websocket握手成功，发送登录数据:"+login_data);
        ws.send(login_data);
    }

    // 服务端发来消息时
    function onmessage(e)
    {
        console.log(e.data);
        var data = eval("("+e.data+")");
        switch(data['type']){
            // 服务端ping客户端
            case 'ping':
                ws.send('{"type":"pong"}');
                break;;
            // 登录 更新用户列表
            case 'login':
                //{"type":"login","client_id":xxx,"client_name":"xxx","client_list":"[...]","time":"xxx"}
                say(data['client_id'], data['client_name'],  data['client_name']+' 加入了聊天室', data['time']);
                if(data['client_list'])
                {
                    client_list = data['client_list'];
                }
                else
                {
                    client_list[data['client_id']] = data['client_name'];
                }
                flush_client_list();
                console.log(data['client_name']+"登录成功");
                break;
            // 发言
            case 'say':
                //{"type":"say","from_client_id":xxx,"to_client_id":"all/client_id","content":"xxx","time":"xxx"}
                say(data['from_client_id'], data['from_client_name'], data['content'], data['time']);
                break;
            // 用户退出 更新用户列表
            case 'logout':
                //{"type":"logout","client_id":xxx,"time":"xxx"}
                say(data['from_client_id'], data['from_client_name'], data['from_client_name']+' 退出了', data['time']);
                delete client_list[data['from_client_id']];
                flush_client_list();
        }
    }
* */
