# 特色功能

::: warning 注意！
以下列举的是 魔趣ROM 在 [Android 开源项目 (AOSP)](https://source.android.com/) 基础上所做的改进，不同版本间可能存在差异。例如一个功能只支持基于 Android 8.0 的 MK80.1 或更高版本，将会被标注为 <Badge text="MK80.1+"/>
:::

[[toc]]

## 短信

::: warning 注意！
当您刷入 [Open Gapps Micro](https://github.com/opengapps/opengapps/wiki/Micro-Package) 或更完整的 [Open Gapps](https://opengapps.org/)，内置短信程序会替换为 Google 版本，以下特色功能将不再有效。

魔趣建议需要使用 [Open Gapps](https://opengapps.org/) 的用户刷入 [Open Gapps Nano](https://github.com/opengapps/opengapps/wiki/Nano-Package) 以确保功能完整性。
:::

### 号码归属地 <Badge text="MK44.4+"/>
短信列表中会显示发送方的号码归属地。

![号码归属地](/screenshots/zh/messaging/location_display.png)

### 智能归档短信 <Badge text="当前支持中国大陆、中国香港、马来西亚与印度号码的识别" type="warn"/> <Badge text="MK71.2+"/>

当下，我们的短信程序中充斥着各类通知与验证码短信。它们的存在使得我们检索与好友间的日常短信变得极为困难。因此，魔趣将帮助您自动归档此类短信，让重要短信变得清晰可见。

### 自动识别验证码短信 <Badge text="MK60.1+"/>

魔趣会自动识别验证码类短信，您只需点击通知即可一键复制验证码，提高效率。

![验证码短信](/screenshots/zh/messaging/captcha_notification.png)

### 自动删除验证码短信 <Badge text="MK71.2+"/>

验证码短信具有时效性，长期保存是没有意义的。开启该选项，当您复制验证码后，短信会自动销毁。

![自动删除验证码短信](/screenshots/zh/messaging/captcha_autodelete.png)

### 归档短信未读角标 <Badge text="MK71.2+" />

魔趣为归档短信加入了未读角标，避免你错过需要及时阅读的短信。

![归档短信未读角标](/screenshots/zh/messaging/unread_badge.png)

### 可左右滑动的归档界面 <Badge text="MK60.1+" />

Google 并未在 [Android 开源项目 (AOSP)](https://source.android.com/) 中添加短信归档界面的滑动支持，魔趣完善了它。

![可左右滑动的归档界面](/screenshots/zh/messaging/swipeable.png)

### 短信快捷处理选项 <Badge text="MK60.1+" />

收到新通知时，Android 原生版本 只有一个"回复"选项，魔趣增加了"拨打"和"已读"选项。

![短信快捷处理选项](/screenshots/zh/messaging/quick_message_option.png)

## 电话

::: warning 注意！
当您刷入 [Open Gapps Micro](https://github.com/opengapps/opengapps/wiki/Micro-Package) 或更完整的 [Open Gapps](https://opengapps.org/)，内置电话程序会替换为 Google 版本，以下特色功能将不再有效。

魔趣建议需要使用 [Open Gapps](https://opengapps.org/) 的用户刷入 [Open Gapps Nano](https://github.com/opengapps/opengapps/wiki/Nano-Package) 以确保功能完整性。
:::

### T9 拨号 <Badge text="当前支持汉语、韩语、希腊语、俄语、希伯来语和乌克兰语" type="warn"/> <Badge text="MK44.4+" />

您可以在拨号面板通过输入号码、姓名全拼或是首字母的方式来检索联系人

![T9 拨号](/screenshots/zh/phone/dialer_t9.png)

### 号码归属地 <Badge text="MK44.4+" />

会在以下位置会显示号码归属地：

* 拨号面板
* 通话记录
* 联系人详情
* 来电、去电
* 来电浮动通知
* 未接来电通知

![拨号面板](/screenshots/zh/phone/dialer_location.png) ![通话记录](/screenshots/zh/phone/call_log_location.png)![联系人详情](/screenshots/zh/phone/contact_location.png) ![来电、去电](/screenshots/zh/phone/incall_location.png)![来电浮动通知](/screenshots/zh/phone/heads-up_notification.png) ![未接来电通知](/screenshots/zh/phone/missed_call.png)

### 中文姓氏联系人头像

Android 原生会提取英文联系人的首字母作为头像，魔趣加入了中文姓氏的支持。

![中文姓氏联系人头像](/screenshots/zh/phone/chinese_letter.png)