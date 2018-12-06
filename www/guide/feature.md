# 功能简介

::: warning 注意！
以下列举的是 魔趣ROM 在 [Android 开源项目 (AOSP)](https://source.android.com/) 基础上所做的改进，不同版本间可能存在差异。例如一个功能只支持基于 Android 8.0 的 MK80.1 或更高版本，将会被标注为 <Badge text="MK80.1+"/>
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

当下，我们的短信程序中充斥着各类通知与验证码短信。它们的存在使得我们检索与好友间的日常短信变得极为困难。因此，魔趣将帮助您自动归档此类短信，让重要短信变得清晰可见。<Badge text="当前支持中国大陆、中国香港、马来西亚与印度号码的识别" type="warn"/> <Badge text="MK71.2+"/>

### 归档短信未读角标

魔趣为归档短信加入了未读角标，避免你错过需要及时阅读的短信。<Badge text="MK71.2+" />

![归档短信未读角标](/screenshots/zh/messaging/unread_badge.png)

### 可滑动的归档界面

Google 并未在 [Android 开源项目 (AOSP)](https://source.android.com/) 中添加短信归档界面的滑动支持，魔趣完善了它。<Badge text="MK60.1+" />

![可左右滑动的归档界面](/screenshots/zh/messaging/swipeable.png)

### 短信快捷处理选项

收到新通知时，Android 原生版本 只有一个"回复"选项，魔趣增加了"拨打"和"已读"选项。<Badge text="MK60.1+" />

![短信快捷处理选项](/screenshots/zh/messaging/quick_message_option.png)

### 自动识别验证码短信

魔趣会自动识别验证码类短信，您只需点击通知即可一键复制验证码，提高效率。<Badge text="MK60.1+"/>

![验证码短信](/screenshots/zh/messaging/captcha_notification.png)

### 自动删除验证码短信

验证码短信具有时效性，长期保存是没有意义的。开启此选项，当您复制验证码后，短信会自动销毁。<Badge text="MK71.2+"/>

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

您可以在通话记录中对陌生号码进行临时标记，标记信息仅会存储在本机。<Badge text="MK71.2+" />

![陌生号码标记](/screenshots/zh/phone/mark_phone_number_01.png) ![陌生号码标记](/screenshots/zh/phone/mark_phone_number_02.png)

### 通话自动录音

开启此选项，系统会在通话时自动开启通话录音功能。<Badge text="依赖设备内核支持，若您的设备不存在此选项，请向设备维护者发出请求。" type="warn"/> <Badge text="MK71.2+" />

![通话自动录音](/screenshots/zh/phone/call_recording_01.png) ![通话自动录音](/screenshots/zh/phone/call_recording_02.png)

## 日历

::: tip 全新日历程序！
我们弃用了 [Android 开源项目 (AOSP)](https://source.android.com/) 中默认的日历程序，使用 [Simple-Calendar](https://github.com/SimpleMobileTools/Simple-Calendar) 开源代码二次开发了全新的版本。新版本更加符合 [Material Design](https://material.io/) 设计语言，更好用！
:::

::: warning 注意！
当您刷入 [Open Gapps Micro](https://github.com/opengapps/opengapps/wiki/Micro-Package) 或更完整的 [Open Gapps](https://opengapps.org/)，内置日历程序会替换为 Google 版本，以下特色功能将不再有效。

魔趣建议需要使用 [Open Gapps](https://opengapps.org/) 的用户刷入 [Open Gapps Nano](https://github.com/opengapps/opengapps/wiki/Nano-Package) 以确保功能完整性。
:::

### 支持显示农历、节气、法定节假日与调休

日历视图中会显示农历、节气、法定节假日与调休信息。<Badge text="MK71.2+" />

![农历、节气、法定节假日与调休](/screenshots/zh/calendar/calendar_festival_01.png) ![农历、节气、法定节假日与调休](/screenshots/zh/calendar/calendar_festival_02.png)

### ics 格式文件导入导出

您可以自行制作和下载 ics 格式的日历数据文件并将其导入到日历中，例如导入"2018年的欧冠赛程"。<Badge text="MK71.2+" />

![ics 格式文件导入导出](/screenshots/zh/calendar/calendar_ics.png)

### CalDAV 协议同步

借助 CalDAV 协议，您可以与支持该协议的其它软件同步数据，例如与 Google 日历同步数据。<Badge text="MK71.2+" />

![CalDAV 协议同步](/screenshots/zh/calendar/calendar_CalDAV.png)

## 主题

### Substratum 主题管理器

您可以在 [Google Play](https://play.google.com/store/search?q=substratum+theme&c=apps) 下载安装数百款 Substratum 主题，个性化系统界面。<Badge text="MK71.2+" />

![substratum 主题管理器](/screenshots/zh/theme/substratum_01.png) ![substratum 主题管理器](/screenshots/zh/theme/substratum_02.png)