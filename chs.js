/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "\t\t\t\t\t\t\t\t\t\tBuild cycles:\n\t\t\t\t\t\t\t\t\t": "\t\t\t\t\t\t\t\t\t\t构建周期:\n\t\t\t\t\t\t\t\t\t",
    "\t\tA": "\t\t一个",
    "\t\tEach time a new": "\t\t每次都有新的",
    "\t\tIf you buy a": "\t\t如果你买了",
    "\tA": "\t一个",
    "\tAn": "\t一个",
    "\tBuilding each Array makes you": "\t构建每个数组使您",
    "\tBuying a": "\t买一个",
    "\tCycles are reduced each time a unit is built and can also be reduced by using the manual button.": "\t每次建造一个单元时都会减少周期，也可以通过使用手动按钮来减少周期。",
    "\tEach Multitronic Array requires 3 Phase Buffers to be constructed.": "\t每个 Multitronic 阵列都需要构建 3 相缓冲器。",
    "\tEach Phase Buffer build takes off 5 cycles, making the": "\t每个阶段缓冲区构建需要 5 个周期，使得",
    "\tUse various upgrades to reduce the complexity and make the production stack more efficient.\n": "\t使用各种升级来降低复杂性并使生产堆栈更加高效。\n",
    "\tYou have only 30 minutes to complete the game, so choose your strategy wisely!\n": "\t你只有 30 分钟的时间来完成游戏，所以明智地选择你的策略！\n",
    "\tYour goal is to build": "\t你的目标是建立",
    "  upgrade, every percent of a": "升级，每百分之一",
    "  will grow the value of the factory with each": "​工厂的价值将随着每一次的增长而增长",
    " Arrays": "数组",
    " Buffers": "缓冲器",
    " Circuits": "电路",
    ". In order to do that, you first have to build their ingridients:": ".为了做到这一点，你首先必须构建他们的成分：",
    ". Initially everything is slow and inefficient. By upgrading your technological stack, you can turn your factory into a wonder machine of unbelievable capacity!": ".最初一切都是缓慢而低效的。通过升级你的技术堆栈，你可以将你的工厂变成一个具有令人难以置信的能力的奇迹机器！",
    ". So, initially 2 Multitronic Arrays are required for each percent of a Verteron Controller. When it is built, 3 Multitronic Arrays will be required for each percent of the next one, and so on.": "因此，最初 Verteron 控制器的每个百分比需要 2 个 Multitronic 阵列。当它建成后，下一个控制器的每个百分比将需要 3 个 Multitronic 阵列，依此类推。",
    "1 million Verteron Controllers": "100 万个 Verteron 控制器",
    "A one-time bonus": "一次性奖金",
    "A one-time increase of of the manual button value by x10": "手动按钮值一次性增加x10",
    "AC Automator": "交流自动机",
    "AC Doubler": "交流倍增器",
    "AC Optimizer": "交流优化器",
    "Adds 1 cycle to Assembly Circuit build": "为装配电路构建添加 1 个周期",
    "Adds 1 cycle to Assembly Circuit pass": "向装配电路通道添加 1 个周期",
    "Adds 1 cycle to Multitronic Array build": "为 Multitronic Array 构建添加 1 个周期",
    "Adds 1 cycle to Phaser Buffer build": "为 Phaser Buffer 构建添加 1 个周期",
    "Adds 1 cycle to Verteron Controller progress": "为 Verteron 控制器进度添加 1 个周期",
    "Adds prestige to your Assembly Circuit production line": "为您的装配电路生产线增添威望",
    "Adds prestige to your Multitronic Array production line": "为您的 Multitronic Array 生产线增添声誉",
    "Adds prestige to your Phase Buffer production line": "为您的相位缓冲器生产线增添威望",
    "Adds prestige to your whole enterprise": "为您的整个企业增添威望",
    "allow to construct a": "允许构建一个",
    "and": "和",
    "Array Automator": "阵列自动机",
    "Array Degrader": "阵列降级器",
    "Array Doubler": "阵列倍增器",
    "Assembly Circuit": "组装电路",
    "Assembly Circuit:": "组装电路：",
    "Assembly Circuits": "组装电路",
    "Automates Assembly Circuits builds": "自动化装配电路构建",
    "Automates Multitronic Arrays builds": "自动化 Multitronic 阵列构建",
    "Automates Phase Buffers builds": "自动构建相位缓冲器",
    "Become": "变得",
    "Beryllium Ion Splitter": "铍离子分离器",
    "Buffer Automator": "缓冲自动机",
    "Buffer Degrader": "缓冲降级器",
    "Buffer Doubler": "缓冲倍增器",
    "Build 2 Verteron Controllers and become": "搭建 2 个 Verteron 控制器并成为",
    "Build cycles:": "构建周期：",
    "build will reduce the effect by a small amount.\n": "构建会稍微降低效果。\n",
    "Button Infusor (O)": "按钮输液器 (O)",
    "Button Multiplier": "按钮乘数",
    "Changes game wallpaper to a view of the cosmos": "将游戏壁纸更改为宇宙视图",
    "closer to the": "更接近于",
    "Complexity increase in: ": "复杂性增加：",
    "Cycles till next payout:": "循环至下一次付款：",
    "Degrades Array Doubler at the cost of 1 Verteron Controller": "以 1 个 Verteron 控制器为代价降低阵列倍增器的性能",
    "Degrades Buffer Doubler at the cost of 1 Verteron Controller": "以 1 个 Verteron 控制器为代价降低缓冲倍增器的性能",
    "Does nothing, but costs money": "什么都不做，但是要花钱",
    "Doubles build progress": "构建进度加倍",
    "Doubles production speed of Assembly Circuits": "装配电路的生产速度加倍",
    "Doubles production speed of Multitronic Arrays": "将 Multitronic 阵列的生产速度提高一倍",
    "Doubles production speed of Phase Buffers": "相位缓冲器的生产速度加倍",
    "Doubles the amount of Arrays built simultaneously": "同时构建的数组数量加倍",
    "Doubles the amount of Assembly Circuits built simultaneously": "同时构建的装配电路数量加倍",
    "Doubles the amount of Controllers built simultaneously": "同时构建的控制器数量加倍",
    "Doubles the amount of Phase Buffers built simultaneously": "同时构建的相位缓冲器数量加倍",
    "Doubles the sale value of Buffers and Arrays": "缓冲区和数组的销售价值翻倍",
    "every 8 units": "每8个单位",
    "Factory Renovation": "工厂装修",
    "Factory value": "出厂价值",
    "factory value payout": "出厂价值支付",
    "Factory value:": "出厂价值：",
    "Factory Worker": "工厂员工",
    "Field Inhibitor": "电场抑制剂",
    "goes up by 1": "增加 1",
    "Halves the current amount of AC passes": "将当前的 AC 通行量减半",
    "happen faster.\n": "发生得更快。\n",
    "Illegal Nanoshell Chamber": "非法纳米壳室",
    "Increases the value of the manual button by 1": "将手动按钮的值增加 1",
    "Investment Fund:": "投资基金：",
    "is built, the amount of": "建成后，数量为",
    "is the basic building block. It costs nothing to produce, but the catch is that": "是基本的构建块。生产不需要任何成本，但问题是",
    "is the end product of the factory.": "是工厂的最终产品。",
    "Limits AC complexity by level 5 for 100 builds": "将 100 个构建的 AC 复杂性限制为 5 级",
    "Macaroni Replicator": "通心粉复制器",
    "Machine Room Manager": "机房管理",
    "Multitronic Array": "多电子阵列",
    "Multitronic Arrays": "多电子阵列",
    "Pass cycles:": "通过周期：",
    "payout": "支付",
    "percent. However, a": "百分比。然而，",
    "Phase Buffer": "相位缓冲器",
    "Phase Buffers": "相位缓冲器",
    "Phase Emitter": "相位发射器",
    "Planet Overlord": "行星霸主",
    "Premium Quarters": "高级宿舍",
    "Pulse Shifter": "脉冲移位器",
    "Rank": "等级",
    "Rank: ": "等级：",
    "Rated Assembly Circuits": "额定装配电路",
    "Rated Multitronic Arrays": "额定 Multitronic 阵列",
    "Rated Phase Buffers": "额定相位缓冲器",
    "Rated Verteron Controllers": "额定 Verteron 控制器",
    "required for the next one": "需要下一个",
    "requires 2": "需要 2",
    "Requires at least 1% progress of Verteron Controller": "需要 Verteron 控制器至少 1% 的进度",
    "Resets \"cycles till next payout\" to 500": "将“直到下一次支付的周期”重置为 500",
    "Restores Rubidium Compensator effect by 1%": "铷补偿器效果恢复1%",
    "Robotic Hand": "机械手",
    "Rubidium Compensator": "铷补偿器",
    "Social Status: ": "社会地位：​",
    "Status Upgrades": "状态升级",
    "Tech Broker": "技术经纪人",
    "Technology Upgrades": "技术升级",
    "Temporal Manifold": "颞流形",
    "Temporal Manifold II": "颞流形 II",
    "Temporal Manifold III": "颞流形 III",
    "Temporal Manifold IV": "颞流形 IV",
    "Temporal Manifold V": "颞流形 V",
    "the amount of passes to produce a Circuit": "产生一个电路的传递次数",
    "Time: ": "时间：",
    "Upgrades your rank": "升级你的等级",
    "Verteron Adjuster": "维特隆调节器",
    "Verteron Controller": "维特龙控制器",
    "Verteron Controller progress increases factory value": "Verteron 控制器的进步增加了工厂价值",
    "Verteron Controllers: ": "维特龙控制器：",
    "Verteron Doubler": "维特隆倍增器",
    "when more than 5 min is left": "当还剩5分钟以上时",
    "will be paid out to you each time the amount of cycles becomes 0.": "每次循环数变为0时都会向您支付。",
    "will grow the value of the factory.": "将增加工厂的价值。",
    "will increase by 1": "将增加 1",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    " Multitronic Arrays required: ": "​所需 Multitronic 阵列：",
    " Phase Buffers required: ": "​所需相位缓冲器：",
    " Assembly Circuits required: ": "所需组装电路：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) cycles$/, '$1 循环'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);