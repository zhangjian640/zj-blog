const str = `
<span class="topiclist-tab">问答</span>



    <a class='topic_title' href='/topic/5c29ecb03898674067a79d7c' title='书上看到requestServer，手册中却没有，现在是改成什么了吗'>
      书上看到requestServer，手册中却没有，现在是改成什么了吗
    </a>
  </div>
</div>
<div class='cell'>

  <a class="user_avatar pull-left" href="/user/didiaohu">
    <img src="https://avatars0.githubusercontent.com/u/19411940?v=4&amp;s=120"
         title="didiaohu"
            />
  </a>

  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      1
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title='点击数'>
      135
    </span>
  </span>


  <a class='last_time pull-right' href="/topic/5c2d6df876c4964062a1ffe2#5c2da2e03898674067a7a95a">
    <img class="user_small_avatar" src="https://avatars1.githubusercontent.com/u/23301914?v=4&amp;s=120">
    <span class="last_active_time">6 小时前</span>
  </a>



  <div class="topic_title_wrapper">


<span class="topiclist-tab">问答</span>



    <a class='topic_title' href='/topic/5c2d6df876c4964062a1ffe2' title='请问下在自己的网站搜索，但能搜 Github、CSDN、掘金等网站的资源，类似鸠摩搜书这种功能，用得什么技术点呢？'>
      请问下在自己的网站搜索，但能搜 Github、CSDN、掘金等网站的资源，类似鸠摩搜书这种功能，用得什么技术点呢？
    </a>
  </div>
</div>
<div class='cell'>
`
const reg = /<a class='topic_title' href='([^']+)' title='([^']+)'>[\s\S]+?<\/a>/g

const result = str.match(reg)
console.log(result)