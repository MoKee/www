# 快速上手

## 解锁引导加载程序

::: warning 注意
在刷入第三方ROM前，您可能需要先解锁设备，该步骤只需执行一次。
:::

::: danger 重要
解锁引导加载程序将删除设备上的所有数据！在开始之前，请确保您已将想要保留的数据备份到您的 PC 或 Google 账户中。
:::

## 通过 fastboot 安装 Recovery

1. 下载 Recovery - 例如 [TWRP](https://twrp.me/)。

   * 您可以前往 [魔趣下载站](https://download.mokeedev.com) 的设备页面，点击 **Recovery 下载**。
   * 如果没有找到适用于您设备的 Recovery，请借助互联网搜索设备维护者或资深玩家发布的教程。

2. 通过USB将您的设备连接到电脑。

3. 在电脑上打开命令提示符（Windows）或 终端 （Linux 或 macOS）并输入：

   ``` adb reboot bootloader ```

   您也可以通过组合键启动 fastboot 模式：

   * 关闭设备后，按住音量调低 + 电源键，直到屏幕上方出现“FASTBOOT”字样，然后松开。

4. 一旦设备处于 fastboot 模式，请通过键入以下内容验证您的 PC 是否找到它：

   ```fastboot devices```

   ::: warning 注意

   如果在 Linux 或 macOS 上看到 "no permissions fastboot"，请在 ROOT 下运行该命令。

   :::

5. 将 Recovery 刷入到您的设备。

   ```fastboot flash recovery twrp-x.x.x-x-x.img```

   ::: warning 注意

   请根据 Recovery 的名称对命令做相应的调整。

   :::

6. 现在进入 Recovery 模式以验证安装：

   * 关闭设备后，按住音量调高 + 电源键，直到进入 Recovery 模式，然后松开。

## 通过 Recovery 安装魔趣ROM

1. 下载你想要安装的魔趣ROM包。
   * 可选项，下载第三方扩展包，例如 [OpenGapps](https://opengapps.org/)

2. 如果您尚未进入 Recovery 模式，请重启到 Recovery 模式。
   * 关闭设备后，按住音量调高 + 电源键，直到进入 Recovery 模式，然后松开。

3. 点击主界面的 WIPE 按钮。
4. 点击 Format Data 执行格式化过程。这将删除加密以及存储在内部存储上的所有文件。
5. 定位到您存储在内部存储上的魔趣ROM包，并执行安装过程。
6. 使用同样的方式安装其它第三方扩展包。
7. 安装结束后，返回主菜单，点击 Reboot, 然后点击 System。