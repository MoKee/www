# 功能简介

::: warning 注意！
以下列举的是 [魔趣 ROM](https://download.mokeedev.com/) 在 [Android 开源项目 (AOSP)](https://source.android.com/) 基础上所做的部分改进。有些仅在特定版本有效，例如只支持 MK80.1 或更高版本的功能，将会被标注为 <Badge text="MK80.1+"/>
:::

[[toc]]

## 短信

::: warning 注意！
当您刷入 [Open Gapps Micro](https://github.com/opengapps/opengapps/wiki/Micro-Package) 或更完整的 [Open Gapps](https://opengapps.org/)，内置短信程序会替换为 Google 版本，以下特色功能将不再有效。

魔趣建议需要使用 [Open Gapps](https://opengapps.org/) 的用户刷入 [Open Gapps Nano](https://github.com/opengapps/opengapps/wiki/Nano-Package) 以确保功能完整性。
:::

### 号码归属地

短信列表中会显示发送方的号码归属地。<Badge text="MK44.4+"/>

![号码归属地](/screenshots/zh/messaging/location_display.png)

### 智能归档短信

当下，我们的短信程序中充斥着各类通知与验证码短信。它们的存在让我们检索与好友间的日常短信变得极为困难。因此，魔趣将帮助您自动归档此类短信，让重要短信变得清晰可见。<Badge text="当前支持中国大陆及港澳台、马来西亚与印度号码的识别" type="warn"/> <Badge text="MK71.2+"/>

### 归档短信未读角标

魔趣为归档短信加入了未读角标，避免你错过需要及时阅读的短信。<Badge text="MK71.2+" />

![归档短信未读角标](/screenshots/zh/messaging/unread_badge.png)

### 可滑动的已归档会话

Android 原生版本中已归档会话不支持滑动操作（删除、归档），魔趣完善了它。<Badge text="MK60.1+" />

![可左右滑动的归档界面](/screenshots/zh/messaging/swipeable.png)

### 短信快捷处理选项

收到新通知时，Android 原生版本 只有一个"回复"选项，魔趣增加了"拨打"和"已读"选项。<Badge text="MK60.1+" />

![短信快捷处理选项](/screenshots/zh/messaging/quick_message_option.png)

### 自动识别验证码短信

魔趣会自动识别验证码类短信，您只需点击通知即可一键复制验证码，提高效率。<Badge text="当前支持简体中文、繁体中文与英文验证码短信" type="warn"/> <Badge text="MK60.1+"/>

![验证码短信](/screenshots/zh/messaging/captcha_notification.png)

### 自动删除验证码短信

验证码短信具有时效性，无需永久保存。开启此选项，当您复制验证码后，短信会自动销毁。<Badge text="MK71.2+"/>

![自动删除验证码短信](/screenshots/zh/messaging/captcha_autodelete.png)

## 电话

::: warning 注意！
当您刷入 [Open Gapps Micro](https://github.com/opengapps/opengapps/wiki/Micro-Package) 或更完整的 [Open Gapps](https://opengapps.org/)，内置电话程序会替换为 Google 版本，以下特色功能将不再有效。

魔趣建议需要使用 [Open Gapps](https://opengapps.org/) 的用户刷入 [Open Gapps Nano](https://github.com/opengapps/opengapps/wiki/Nano-Package) 以确保功能完整性。
:::

### T9 拨号

您可以在拨号面板通过输入号码、姓名全拼或是首字母的方式来检索联系人。<Badge text="当前支持汉语、韩语、希腊语、俄语、希伯来语和乌克兰语" type="warn"/> <Badge text="MK44.4+" />

![T9 拨号](/screenshots/zh/phone/dialer_t9.png)

### 号码归属地

会在以下位置会显示号码归属地<Badge text="MK44.4+" />：

* 拨号面板
* 通话记录
* 联系人详情
* 来电、去电
* 来电浮动通知
* 未接来电通知

![拨号面板](/screenshots/zh/phone/dialer_location.png) ![通话记录](/screenshots/zh/phone/call_log_location.png)![联系人详情](/screenshots/zh/phone/contact_location.png) ![来电、去电](/screenshots/zh/phone/incall_location.png)![来电浮动通知](/screenshots/zh/phone/heads-up_notification.png) ![未接来电通知](/screenshots/zh/phone/missed_call.png)

### 中文姓氏联系人头像

Android 原生会提取英文联系人的首字母作为头像，魔趣加入了中文姓氏的支持。<Badge text="MK71.2+" />

![中文姓氏联系人头像](/screenshots/zh/phone/chinese_letter.png)

### 陌生号码标记

您可以在通话记录中对陌生号码进行标记，标记信息仅会存储在本机，无需担心隐私问题。<Badge text="MK71.2+" />

![陌生号码标记](/screenshots/zh/phone/mark_phone_number_01.png) ![陌生号码标记](/screenshots/zh/phone/mark_phone_number_02.png)

### 通话自动录音

开启此选项，系统会在通话时自动开启通话录音功能。<Badge text="依赖设备内核支持，若您的设备不存在此选项，请向设备维护者发出请求" type="warn"/> <Badge text="MK71.2+" />

![通话自动录音](/screenshots/zh/phone/call_recording_01.png) ![通话自动录音](/screenshots/zh/phone/call_recording_02.png)

## 日历

::: tip 全新日历程序！
魔趣弃用了 [Android 开源项目 (AOSP)](https://source.android.com/) 中默认的日历程序（该版本已经长期没有得到 Google 的更新，不符合 [Material Design](https://material.io/) 设计语言规范），使用 [Simple-Calendar](https://github.com/SimpleMobileTools/Simple-Calendar) 开源代码开发了全新的版本。
:::

::: warning 注意！
当您刷入 [Open Gapps Micro](https://github.com/opengapps/opengapps/wiki/Micro-Package) 或更完整的 [Open Gapps](https://opengapps.org/)，内置日历程序会替换为 Google 版本，以下特色功能将不再有效。

魔趣建议需要使用 [Open Gapps](https://opengapps.org/) 的用户刷入 [Open Gapps Nano](https://github.com/opengapps/opengapps/wiki/Nano-Package) 以确保功能完整性。
:::

### 农历、节气、法定节假日与调休

日历视图中会显示农历、节气、法定节假日与调休信息。<Badge text="MK71.2+" />

![农历、节气、法定节假日与调休](/screenshots/zh/calendar/calendar_festival_01.png) ![农历、节气、法定节假日与调休](/screenshots/zh/calendar/calendar_festival_02.png)

### ics 格式文件导入导出

您可以自行制作和下载 ics 格式的日历数据文件并将其导入到日历中，例如导入"2018年的欧冠赛程"。<Badge text="MK71.2+" />

![ics 格式文件导入导出](/screenshots/zh/calendar/calendar_ics.png)

### CalDAV 协议同步

借助 CalDAV 协议，您可以与支持该协议的其它软件同步数据，例如与 Google 日历同步数据。<Badge text="MK71.2+" />

![CalDAV 协议同步](/screenshots/zh/calendar/calendar_CalDAV.png)

## 主题

### Substratum 主题引擎

[魔趣 ROM](https://download.mokeedev.com/) 集成了强大的 Substratum 主题引擎，您可以在 [Google Play](https://play.google.com/store/search?q=substratum+theme&c=apps) 下载安装数百款主题，个性化系统界面。<Badge text="MK71.2+" />

![substratum 主题管理器](/screenshots/zh/theme/substratum_01.png) ![substratum 主题管理器](/screenshots/zh/theme/substratum_02.png)

## 桌面

### 显示当前城市天气、应用自定义图标包

您可以设置在桌面上显示当前城市的天气信息，或是应用一个程序图标包。<Badge text="MK71.2+" />

![当前城市天气与图标包](/screenshots/zh/launcher/lawnchair_home.png)

### 整合 Google Feed

当您的设备安装有 [Open Gapps](https://opengapps.org/) 时，便可以开启 Google Feed。<Badge text="MK71.2+" />

![显示 Google Feed](/screenshots/zh/launcher/lawnchair_feed.png)

### 丰富的个性化选项

包括但不限于修改图标、网格尺寸、隐藏应用、模糊效果、手势控制等。<Badge text="MK71.2+" />

![丰富的个性化选项](/screenshots/zh/launcher/lawnchair_settings.png)

## 系统界面

### 农历、节气、节假日

锁屏界面与状态栏会显示当天的农历、节气与节假日信息。<Badge text="MK81.0+" />

![农历、节气、节假日](/screenshots/zh/systemui/keyguard_calendar.png) ![农历、节气、节假日](/screenshots/zh/systemui/statusbar_calendar.png)

### 状态栏网速

在状态栏实时显示网络流量信息。（魔趣已为您过滤VPN流量，许多ROM在开启VPN会显示双倍的网速，那是错误的） <Badge text="MK71.2+" />

![状态栏网速](/screenshots/zh/systemui/statusbar_network_traffic.png)

### 状态栏时间精细化与秒数

在状态栏显示精细化的时间（例如凌晨）和秒数。<Badge text="精细化时间仅在系统设置为12小时制时有效" type="warn"/> <Badge text="MK60.1+" />

![时间精细化显示与秒数](/screenshots/zh/systemui/statusbar_friendly_time.png)

## 便捷操作

### 全面屏手势

您可以在 设置 - 系统 - 高级 - 手势 界面开启全面屏手势来代替传统导航键。<Badge text="MK90.0+" />

![全面屏手势](/screenshots/zh/gesture/bottom_gesture_navigation.gif)

### 指纹快速启动程序

您可以在 设置 - 应用和通知 - 指纹快速启动 界面设置指纹来快速启动程序，例如在锁屏界面下，使用左手食指快速解锁屏幕并打开支付宝二维码付款界面。<Badge text="仅限支持指纹识别的设备" type="warn"/> <Badge text="MK71.2+" />

![指纹快速启动程序](/screenshots/zh/shortcut/fingerprint.png)

### 基于可信面孔的自动解锁

当您的设备安装有 [Open Gapps](https://opengapps.org/) 并设置了可信面孔时，锁屏界面下识别到可信面孔会自动解锁设备。<Badge text="MK71.2+" />

## 更新系统

### 增量更新

新版本发布时，您无需下载完整包，只需要下载增量包就能更新系统。例如 Smartisan U3 Pro 的 Android 9.0 完整包约有 700 MB，而增量包只有区区 20 MB，为您节省流量与时间。<Badge text="MK44.4+" />

![增量更新](/screenshots/zh/updater/incremental_updates.gif)

### 精简与定制

当您精简或定制系统后，魔趣独家的增量更新技术能够确保您的个性化改动不会因系统更新而还原。例如修改系统默认开机动画、删除可精简清单中列出的系统内置应用、向系统分区添加自己喜爱的应用等改动会在完整包更新时被还原，而使用增量更新时会被保留。<Badge text="MK44.4+" />

### 放心刷™

世界上没有完美的程序，只要做出改进，就有可能出现新的BUG。开启 魔趣中心 - 放心刷™ 选项，我们会利用数据分析为您规避风险，确保您接收到的新版本都是经过多数用户验证，较为稳定可靠的。<Badge text="MK71.2+" />

