export type Dimension = 'W' | 'F' | 'Y' | 'X' | 'B' | 'J' | 'M' | 'P';

export interface Question {
  id: number;
  text: string;
  options: [
    { text: string; value: Dimension },
    { text: string; value: Dimension }
  ];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "遇到插队的人，你的第一反应是：",
    options: [
      { text: "在心里把他祖宗十八代骂一遍，然后默默退后半步。", value: "W" },
      { text: "直接阴阳怪气：“哟，赶着去投胎啊？”", value: "F" }
    ]
  },
  {
    id: 2,
    text: "老板周末半夜发消息安排工作：",
    options: [
      { text: "假装没看见，第二天早上回“不好意思刚看到”。", value: "W" },
      { text: "截图发到朋友圈（仅老板不可见）并配文“傻X”。", value: "F" }
    ]
  },
  {
    id: 3,
    text: "谈恋爱被绿了：",
    options: [
      { text: "觉得肯定是自己哪里做得不够好，深夜网抑云。", value: "W" },
      { text: "把聊天记录打印成海报贴在对方公司楼下。", value: "F" }
    ]
  },
  {
    id: 4,
    text: "买彩票没中奖，你会想：",
    options: [
      { text: "下次一定中，我已经算好概率了，别墅靠海指日可待。", value: "Y" },
      { text: "废话，我这种穷鬼命，中奖了怕是第二天就被车撞死。", value: "X" }
    ]
  },
  {
    id: 5,
    text: "看到朋友圈有人秀恩爱：",
    options: [
      { text: "脑补他们私底下肯定天天吵架，迟早分手。", value: "Y" },
      { text: "关我屁事，反正我没人爱。", value: "X" }
    ]
  },
  {
    id: 6,
    text: "面对未来的职业规划：",
    options: [
      { text: "只要我努力，总有一天能当上CEO迎娶白富美/高富帅。", value: "Y" },
      { text: "规划个屁，能活到退休不被饿死就算成功。", value: "X" }
    ]
  },
  {
    id: 7,
    text: "离deadline还有一天，你的进度是0：",
    options: [
      { text: "只要我不去想，deadline就不存在，先睡一觉再说。", value: "B" },
      { text: "一边狂扇自己耳光一边熬夜赶工，心脏狂跳。", value: "J" }
    ]
  },
  {
    id: 8,
    text: "看到同龄人年薪百万：",
    options: [
      { text: "挺好的，这个世界多我一个废物怎么了。", value: "B" },
      { text: "陷入深深的自我怀疑，连夜报了三个网课。", value: "J" }
    ]
  },
  {
    id: 9,
    text: "房间乱得像猪窝：",
    options: [
      { text: "乱中有序，这是我的风水局，坚决不收拾。", value: "B" },
      { text: "看着心烦，但又不想动，于是陷入了持续的内疚和烦躁中。", value: "J" }
    ]
  },
  {
    id: 10,
    text: "走在路上突然被鸟屎砸中：",
    options: [
      { text: "哦，今天也是毫无波澜的倒霉一天呢，擦擦继续走。", value: "M" },
      { text: "为什么是我？！老天爷你是不是针对我？！当街大哭。", value: "P" }
    ]
  },
  {
    id: 11,
    text: "连续加班一个月，工资发下来扣了税只剩三千：",
    options: [
      { text: "习惯了，资本家就是吸血鬼，我只是个无情的干电池。", value: "M" },
      { text: "瞬间崩溃，想把电脑砸了，然后在厕所偷偷抹眼泪。", value: "P" }
    ]
  },
  {
    id: 12,
    text: "别人对你开了一个很过分的玩笑：",
    options: [
      { text: "跟着一起笑，内心毫无波澜甚至有点想吃黄焖鸡。", value: "M" },
      { text: "表面笑嘻嘻，晚上躺在床上越想越气，气得整晚睡不着。", value: "P" }
    ]
  }
];
